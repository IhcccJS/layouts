import React from 'react';
import BlockTitle from '../block-title';
import BlockMenu from '../block-menu';

import useStyles from './styles';

const Layout: React.FC<any> = (props) => {
  const {
    logo,
    title,
    subTitle,
    fixedHeader,
    float,
    blur,
    contentWidth,
    location,
    routes,
    renderIcon,
    children,
    heightLayoutHeader,
    renderLogo,
  } = props;
  const { styles, cx } = useStyles();

  const logoElement = <BlockTitle logo={logo} title={title} subTitle={subTitle} direction="horizontal" />;

  return (
    <div
      className={cx(
        styles,
        'layout',
        contentWidth === 'fixed' && 'header-width-fixed',
        contentWidth === 'fixed' && 'content-width-fixed',
      )}
    >
      <header
        className={cx(styles, 'main-header', fixedHeader && 'fixed', float && 'float', blur && 'blur')}
        style={{ height: heightLayoutHeader }}
      >
        <div className={cx(styles, 'header-content')}>
          <div className={cx(styles, 'left-content')}>{renderLogo ? renderLogo(logoElement) : logoElement}</div>
          <div className={cx(styles, 'nav')}>
            <BlockMenu location={location} routes={routes} renderIcon={renderIcon} />
          </div>
          <div className={cx(styles, 'right-content')}>
            <div>admin</div>
          </div>
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

Layout.defaultProps = {
  title: 'Show your system name in "title"',
  heightLayoutHeader: 56,
};

export default Layout;
