import React from 'react';
import { LayoutContext, LayoutSiderContext } from '../context';
import useStyles from './styles';

/** 关闭 | 折叠(变量默认80) | 打开(变量默认256) | 扩展(变量默认30%) | 半屏 | 全屏 | 自由 */
// type TSideStatus = 'close' | 'collapse' | 'open' | 'expand' | 'half' | 'full' | 'free';

const Sider: React.FC<any> = (props) => {
  const {
    className,
    float: siderFloat,
    autoClose,
    status = 'open',
    rift,
    header,
    body,
    footer,
    renderHandlerIcon,
    children,
    ...restProps
  } = props;
  const { styles, cx } = useStyles();
  const { fixedHeader, float, contentWidth } = React.useContext(LayoutContext);

  // 如果存在 float 属性，说明是被布局包裹的侧边栏
  const inner = float !== void 0;

  return (
    <LayoutSiderContext.Provider value={{ status }}>
      <aside
        className={cx(
          styles,
          float && 'layout-with-float',
          'layout-sider',
          inner && 'layout-sider-inner',
          siderFloat && 'layout-sider-float',
          status && 'layout-sider-' + status,
          autoClose && 'layout-sider-auto-close',
          className,
        )}
      >
        <div
          className={cx(
            styles,
            'page-side',
            'page-side-style',
            siderFloat && 'page-side-float',
            fixedHeader && float && contentWidth !== 'fixed' && 'page-side-float-top',
          )}
          {...restProps}
        >
          {((contentWidth !== 'fixed' && !fixedHeader) || !float || !siderFloat) && (
            <div className={cx(styles, 'page-side-rift')}>{rift}</div>
          )}
          {header && <div className={cx(styles, 'page-side-header')}>{header}</div>}
          <div className={cx(styles, 'page-side-body')}>{body}</div>
          {footer && <div className={cx(styles, 'page-side-footer')}>{footer}</div>}
          {autoClose && renderHandlerIcon && <div className={cx(styles, 'page-side-handler')}>{renderHandlerIcon}</div>}
        </div>
        {(!contentWidth ||
          contentWidth === 'fluid' ||
          (typeof contentWidth === 'object' && contentWidth.content !== 'fixed')) && (
          <div className={cx(styles, 'page-side-placeholder')} />
        )}
        <div className={cx(styles, 'page-content')}>{children}</div>
      </aside>
    </LayoutSiderContext.Provider>
  );
};

export default Sider;
