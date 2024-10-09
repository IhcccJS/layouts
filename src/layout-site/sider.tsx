import React from 'react';
import { LayoutContext, LayoutSiderContext } from './context';
import useStyles from './sider-styles';

/** 关闭 | 折叠(变量默认80) | 打开(变量默认256) | 扩展(变量默认30%) | 半屏 | 全屏 | 自由 */
type TSideStatus = 'close' | 'collapse' | 'open' | 'expand' | 'halfScreen' | 'fullScreen' | 'free';

const Sider: React.FC<any> = (props) => {
  const { className, status = 'open', rift, header, body, footer, children, ...restProps } = props;
  const { styles, cx } = useStyles();
  const { fixedHeader, contentWidth } = React.useContext(LayoutContext);

  // if (contentWidth !== void 0) return null;

  const inner = fixedHeader !== void 0;

  return (
    <LayoutSiderContext.Provider value={{ status }}>
      <div
        className={cx(
          styles,
          'layout-with-side',
          inner && 'layout-with-side-inner',
          'layout-with-side-' + status,
          className,
        )}
      >
        <div className={cx(styles, 'page-side')} {...restProps}>
          {inner && <div className={cx(styles, 'page-side-rift')}>{rift}</div>}
          {header && <div className={cx(styles, 'page-side-header')}>{header}</div>}
          <div className={cx(styles, 'page-side-body')}>{body}</div>
          {footer && <div className={cx(styles, 'page-side-footer')}>{footer}</div>}
        </div>
        {contentWidth !== 'fixed' && <div className={cx(styles, 'page-side-placeholder')}></div>}
        <div className={cx(styles, 'page-content')}>{children}</div>
      </div>
    </LayoutSiderContext.Provider>
  );
};

export default Sider;
