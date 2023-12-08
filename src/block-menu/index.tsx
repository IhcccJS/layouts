import React from 'react';

import useStyles from './styles';

const MenuRender: React.FC<any> = (props) => {
  const { direction, location, routes, nest } = props;
  const { styles, cx } = useStyles();
  return (
    <ul className={cx(styles, "nav-menu", direction)}>
      {routes.map((route: any) => {
        return (
          <li className={cx(styles, "nav-menu-item", location.pathname === route.path && 'nav-menu-item-active')} key={route.path}>
            <a>{route.name}</a>

            {nest && route.children?.length > 0 && (
              <MenuRender direction={"vertical"} location={location} routes={route.children} />
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
        <MenuRender location={location} routes={routes} nest />
      </div>
    </div>
  );
};

BlockMenu.defaultProps = {
  title: 'Show your system name in "title"',
};

export default BlockMenu;
