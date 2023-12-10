import React from 'react';

import useStyles from './styles';

const MenuRender: React.FC<any> = (props) => {
  const { direction, location, routes, nest, parentPath } = props;
  const { styles, cx } = useStyles();
  return (
    <ul className={cx(styles, "nav-menu", "nav-menu-" + direction, nest && "nav-menu-nest")}>
      {routes.map((route: any) => {
        const hasChildren = nest && route.children?.length > 0;
        return (
          <li className={cx(styles, "nav-menu-item", hasChildren ? 'nav-menu-item-title' : 'nav-menu-item-link', location.pathname === route.path && 'nav-menu-item-link-active')} key={parentPath + route.path}>
            <a>{route.name}</a>
            {hasChildren && (
              <MenuRender direction="vertical" location={location} routes={route.children} parentPath={route.path} />
            )}
          </li>
        );
      })}
    </ul>
  )
};

const BlockMenu: React.FC<any> = (props) => {
  const { location, routes } = props;
  const { styles, cx } = useStyles();

  return (
    <div className={cx(styles, 'block-menu')}>
      <MenuRender direction="horizontal" location={location} routes={routes} />
      <div className={cx(styles, "nav-menu-popup")}>
        <MenuRender direction="horizontal" location={location} routes={routes} nest />
      </div>
    </div>
  );
};

BlockMenu.defaultProps = {
  title: 'Show your system name in "title"',
};

export default BlockMenu;
