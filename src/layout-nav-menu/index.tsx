import React from 'react';
import BlockTitle from '../block-title';
import BlockMenu from '../block-menu';

import useStyles from './styles';

const Layout: React.FC<any> = (props) => {
  const { logo, title, subTitle, fixedHeader, float, blur, contentWidth, location, routes, children, heightLayoutHeader } = props;
  const { styles, cx } = useStyles();

  return (
    <div className={cx(styles, "layout", contentWidth === "fixed" && "header-width-fixed", contentWidth === "fixed" && "content-width-fixed")}>
      <header
        className={cx(styles, "main-header", fixedHeader && "fixed", float && "float", blur && "blur")}
        style={{ height: heightLayoutHeader }}
      >
        <div className={cx(styles, "header-content")}>
          <div className={cx(styles, "left-content")}>
            <BlockTitle logo={logo} title={title} subTitle={subTitle} />
          </div>
          <div className={cx(styles, "nav")}>
            <BlockMenu location={location} routes={routes} />
          </div>
          <div className={cx(styles, "right-content")}>
            <div>admin</div>
          </div>
        </div>
      </header>
      {fixedHeader && <header className={cx(styles, "main-header-placeholder", float && "float")} style={{ height: heightLayoutHeader }}></header>}
      <main className={cx(styles, "main-body")}>{children}</main>
    </div>
  );
};

Layout.defaultProps = {
  title: 'Show your system name in "title"',
  heightLayoutHeader: 56
};

export default Layout;
