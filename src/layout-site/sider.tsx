import React from 'react';

import useStyles from './sider-styles';

const Sider: React.FC<any> = (props) => {
  const { className, inner, open, header, body, footer, children, ...restProps } = props;
  const { styles, cx } = useStyles();

  return (
    <div className={cx(styles, 'layout-with-side')}>
      <div
        className={cx(styles, 'page-side', inner && 'page-side-inner', open && 'page-side-open', className)}
        {...restProps}
      >
        {header && <div className={cx(styles, 'page-side-header')}>{header}</div>}
        <div className={cx(styles, 'page-side-body')}>{body}</div>
        {footer && <div className={cx(styles, 'page-side-footer')}>{footer}</div>}
      </div>
      <div className={cx(styles, 'page-side-placeholder')}></div>
      <div className={cx(styles, 'page-main', open && 'page-side-opened')}>{children}</div>
    </div>
  );
};

export default Sider;
