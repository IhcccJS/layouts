import React from 'react';
import Sider from './sider';
import { LayoutContext, LayoutSiderContext } from './context';
import useStyles from './styles';

const Layout: React.FC<any> = (props) => {
  const {
    className,
    fixedHeader,
    float,
    blur,
    contentWidth,
    renderTitle,
    renderMenu,
    renderButton,
    renderExtra,
    children,
    heightLayoutHeader,
    ...restProps
  } = props;
  const { styles, cx } = useStyles();
  const { status } = React.useContext(LayoutSiderContext);

  return (
    <LayoutContext.Provider value={{ fixedHeader, float, contentWidth }}>
      <div
        className={cx(
          styles,
          'layout',
          status === 'collapse' && 'layout-side-collapse',
          status === 'open' && 'layout-side-open',
          (contentWidth === 'fixed' || contentWidth?.header === 'fixed') && 'header-width-fixed',
          (contentWidth === 'fixed' || contentWidth?.content === 'fixed') && 'content-width-fixed',
          className,
        )}
        {...restProps}
      >
        <header
          className={cx(
            styles,
            'main-header',
            fixedHeader && 'main-header-fixed',
            float && 'main-header-float',
            blur && 'main-header-blur',
          )}
          style={{ height: heightLayoutHeader }}
        >
          <div className={cx(styles, 'header-content')}>
            <div className={cx(styles, 'header-left-content')}>{renderTitle}</div>
            {(renderMenu || renderExtra) && (
              <React.Fragment>
                <label htmlFor="menu">
                  <input id="menu" className={cx(styles, 'toggle-view')} type="checkbox" />
                </label>
                <div className={cx(styles, 'header-content-view')}>
                  <div className={cx(styles, 'header-menu-nav')}>{renderMenu}</div>
                  {renderButton && <div className={cx(styles, 'header-menu-button')}>{renderButton}</div>}
                  {renderExtra && <div className={cx(styles, 'header-menu-extra')}>{renderExtra}</div>}
                </div>
              </React.Fragment>
            )}
          </div>
        </header>
        {fixedHeader && (
          <header
            className={cx(styles, 'main-header-placeholder', float && 'main-header-placeholder-float')}
            style={{ height: heightLayoutHeader }}
          />
        )}
        <main className={cx(styles, 'main-body')}>{children}</main>
      </div>
    </LayoutContext.Provider>
  );
};

(Layout as any).Sider = Sider;

export default Layout;
