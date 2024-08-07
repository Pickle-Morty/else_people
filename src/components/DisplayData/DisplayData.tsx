import { isRGB } from '@telegram-apps/sdk-react';
import { Cell, Checkbox, Section } from '@telegram-apps/telegram-ui';
import type { FC, ReactNode } from 'react';

import { RGB } from '@/UI/RGB/RGB';
import { Link } from '@/UI/Link/Link';

import styles from './DisplayData.module.scss';

export type DisplayDataRow =
  { title: string } &
  (
    | { type: 'link'; value?: string }
    | { value: ReactNode }
  );

export type DisplayDataProps = {
  header?: ReactNode;
  footer?: ReactNode;
  rows: DisplayDataRow[];
};

export const DisplayData: FC<DisplayDataProps> = ({ header, rows }) => (
  <Section header={header}>
    {rows.map((item, idx) => {
      let valueNode: ReactNode;

      if (item.value === undefined) {
        valueNode = <i>empty</i>;
      } else {
        switch (true) {
          case 'type' in item && item.type === 'link':
            valueNode = <Link to={item.value as string}>Open</Link>;
            break;
          case typeof item.value === 'string':
            valueNode = isRGB(item.value)
              ? <RGB color={item.value}/>
              : item.value;
            break;
          case typeof item.value === 'boolean':
            valueNode = <Checkbox checked={item.value} disabled/>;
            break;
          default:
            valueNode = item.value;
            break;
        }
      }

      return (
        <Cell
          className={styles.line}
          subhead={item.title}
          readOnly
          multiline
          key={idx}
        >
          <span className={styles.line_value}>
            {valueNode}
          </span>
        </Cell>
      );
    })}
  </Section>
);
