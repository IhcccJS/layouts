import React from 'react';

import useStyles from './styles';

const MenuRender: React.FC<any> = (props) => {
  const { direction, location, routes, renderIcon, parentPath } = props;
  const { styles, cx } = useStyles();
  return (
    <ul className={cx(styles, "nav-menu", "nav-menu-" + direction)}>
      {routes.map((route: any) => {
        const hasChildren = route.children?.length > 0;
        return (
          <li className={cx(styles, "nav-menu-item", hasChildren ? 'nav-menu-item-title' : 'nav-menu-item-link', location.pathname === route.path && 'nav-menu-item-link-active')} key={parentPath + route.path}>
            <a>
              {route.icon && <span className={cx(styles, 'nav-menu-item-icon')}>{renderIcon && renderIcon(route)}</span>}
              <span>{route.name} </span>
            </a>
            {hasChildren && (
              <div className={cx(styles, "nav-menu-popup")}>
                <MenuRender direction="horizontal" location={location} routes={route.children} renderIcon={renderIcon} parentPath={route.path} />
              </div>
            )}
          </li>
        );
      })}
    </ul>
  )
};

const BlockMenu: React.FC<any> = (props) => {
  const { location, routes, renderIcon } = props;
  const { styles, cx } = useStyles();

  return (
    <div className={cx(styles, 'block-menu')}>
      <MenuRender direction="horizontal" location={location} routes={routes} renderIcon={renderIcon} />
      {/* <div className={cx(styles, "nav-menu-popup")}>
        <MenuRender direction="horizontal" location={location} routes={routes} nest />
      </div> */}
    </div>
  );
};

BlockMenu.defaultProps = {
  title: 'Show your system name in "title"',
};

export default BlockMenu;
