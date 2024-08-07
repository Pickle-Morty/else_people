import { classNames, useUtils } from '@telegram-apps/sdk-react';
import { type FC, type MouseEventHandler, useCallback } from 'react';
import { Link as RouterLink, type LinkProps } from 'react-router-dom';

import styles from './Link.module.scss';

export type CustomLinkProps = LinkProps & {
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export const Link: FC<CustomLinkProps> = ({
  className,
  onClick: propsOnClick,
  to,
  ...rest
}) => {
  const utils = useUtils();

  const onClick = useCallback<MouseEventHandler<HTMLAnchorElement>>((e) => {
    propsOnClick?.(e);

    // Определение, является ли путь внешним. В таком случае используем метод TMA для открытия ссылки.
    let path: string;
    if (typeof to === 'string') {
      path = to;
    } else {
      const { search = '', pathname = '', hash = '' } = to;
      path = `${pathname}${search ? `?${search}` : ''}${hash ? `#${hash}` : ''}`;
    }

    const targetUrl = new URL(path, window.location.toString());
    const currentUrl = new URL(window.location.toString());
    const isExternal = targetUrl.protocol !== currentUrl.protocol
      || targetUrl.host !== currentUrl.host;

    if (isExternal) {
      e.preventDefault();
      utils.openLink(targetUrl.toString());
    }
  }, [to, propsOnClick, utils]);

  return (
    <RouterLink
      {...rest}
      to={to}
      onClick={onClick}
      className={classNames(className, styles.link)}
      rel="noopener noreferrer" // добавление атрибута безопасности для target="_blank"
    />
  );
};
