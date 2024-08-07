import { classNames, type RGB as RGBType } from '@telegram-apps/sdk-react';
import type { FC } from 'react';

import styles from './RGB.module.scss';

export type RGBProps = JSX.IntrinsicElements['div'] & {
  color: RGBType;
};

export const RGB: FC<RGBProps> = ({ color, className, ...rest }) => (
  <span {...rest} className={classNames(styles.rgb, className)}>
    <i className={styles.rgb__icon} style={{ backgroundColor: color }}/>
    {color}
  </span>
);
