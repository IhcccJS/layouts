import React from 'react';

import useStyles from './styles';

const Layout: React.FC<any> = (props) => {
  const {
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
  } = props;
  const { styles, cx } = useStyles();

  return (
    <div
      className={cx(
        styles,
        'layout',
        contentWidth === 'fixed' && 'header-width-fixed',
        contentWidth === 'fixed' && 'content-width-fixed',
      )}
      style={{ '--layout-nav-height': heightLayoutHeader }}
    >
      <header className={cx(styles, 'main-header', fixedHeader && 'fixed', float && 'float', blur && 'blur')}>
        <div className={cx(styles, 'header-content')}>
          <div className={cx(styles, 'left-content')}>{renderTitle}</div>
          {(renderMenu || renderExtra) && (
            <React.Fragment>
              <input id="menu" className={cx(styles, 'toggle-view')} type="checkbox" />
              <label htmlFor="menu"></label>
              <div className={cx(styles, 'header-content-view')}>
                <div className={cx(styles, 'header-menu-nav')}>{renderMenu}</div>
                {renderButton && <div className={cx(styles, 'header-menu-button')}>{renderButton}</div>}
                {renderExtra && <div className={cx(styles, 'header-menu-extra')}>{renderExtra}</div>}
              </div>
            </React.Fragment>
          )}
        </div>
      </header>
      {fixedHeader && <header className={cx(styles, 'main-header-placeholder', float && 'float')} />}
      <main className={cx(styles, 'main-body')}>{children}</main>
    </div>
  );
};

export default Layout;
