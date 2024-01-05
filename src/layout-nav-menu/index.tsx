import React from 'react';

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

  return (
    <div
      className={cx(
        styles,
        'layout',
        contentWidth === 'fixed' && 'header-width-fixed',
        contentWidth === 'fixed' && 'content-width-fixed',
        className,
      )}
      {...restProps}
    >
      <header
        className={cx(styles, 'main-header', fixedHeader && 'fixed', float && 'float', blur && 'blur')}
        style={{ height: heightLayoutHeader }}
      >
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
      {fixedHeader && (
        <header
          className={cx(styles, 'main-header-placeholder', float && 'float')}
          style={{ height: heightLayoutHeader }}
        />
      )}
      <main className={cx(styles, 'main-body')}>{children}</main>
    </div>
  );
};

export default Layout;
