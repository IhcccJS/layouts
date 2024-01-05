import React from 'react';
import { createPortal } from 'react-dom';
import useStyles from './styles';

const defaultAlias = {
  name: 'name',
  icon: 'icon',
  path: 'path',
  children: 'children',
};

const RouteItem: React.FC<any> = (props) => {
  const { icon, name } = props;
  const { styles, cx } = useStyles();
  return (
    <div className={cx(styles, 'nav-menu-item-render')}>
      <span className={cx(styles, 'nav-menu-item-icon')}>{icon}</span>
      <span className={cx(styles, 'nav-menu-item-text')}>{name}</span>
    </div>
  );
};

const MenuList: React.FC<any> = (props) => {
  const { isActive, alias, routes, renderIcon, renderItem, direction, onMouseEnter, onMouseLeave } = props;
  const { styles, cx } = useStyles();
  return (
    <ul className={cx(styles, 'block-menu', direction === 'vertical' && 'block-menu-vertical')}>
      {routes.map((item: any) => {
        const hasChildren = item[alias.children]?.length > 0;
        const itemDom = <RouteItem icon={renderIcon?.(item) || item[alias.icon]} name={item[alias.name]} />;

        return (
          <li
            className={cx(
              styles,
              'nav-menu-item',
              hasChildren ? 'nav-menu-item-title' : 'nav-menu-item-link',
              isActive?.(item[alias.path], item) && 'nav-menu-item-link-active',
            )}
            onMouseEnter={() => hasChildren && onMouseEnter?.(item)}
            onMouseLeave={() => onMouseLeave?.()}
            key={item.path}
          >
            {renderItem?.(item, itemDom) || itemDom}
          </li>
        );
      })}
    </ul>
  );
};

const MenuListRender: React.FC<any> = (props) => {
  const { isActive, alias, routes, renderIcon, renderItem } = props;
  const { styles, cx } = useStyles();

  return routes.map((item: any) => {
    const hasChildren = item[alias.children]?.length > 0;
    const itemDom = <RouteItem icon={renderIcon?.(item) || item[alias.icon]} name={item[alias.name]} />;
    return (
      <div className={cx(styles, 'nav-menu-column')} key={item.path}>
        {hasChildren ? (
          <React.Fragment>
            <div>{item[alias.name]}</div>
            <MenuList
              direction="vertical"
              isActive={isActive}
              alias={alias}
              routes={item[alias.children]}
              renderIcon={renderIcon}
              renderItem={renderItem}
            />
          </React.Fragment>
        ) : (
          renderItem?.(item, itemDom) || itemDom
        )}
      </div>
    );
  });
};

const BlockMenu: React.FC<any> = (props) => {
  const { blur, location, fieldNames, routes, renderIcon, renderItem } = props;
  const { styles, cx } = useStyles();
  const [subRoutes, setSubRoutes] = React.useState([]);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const alias = React.useMemo(() => Object.assign({}, defaultAlias, fieldNames), []);

  const isActive = (path: string) => location.pathname.indexOf(path) > -1;

  return (
    <React.Fragment>
      <MenuList
        isActive={isActive}
        alias={alias}
        routes={routes}
        renderIcon={renderIcon}
        renderItem={renderItem}
        onMouseEnter={(item: any) => {
          setSubRoutes(item[alias.children]);
          setMenuOpen(true);
        }}
        onMouseLeave={() => {
          setMenuOpen(false);
        }}
      />
      {createPortal(
        <div className={cx(styles, 'nav-menu-popup', blur && 'nav-menu-popup-blur', menuOpen && 'nav-menu-popup-open')}>
          <MenuListRender
            isActive={isActive}
            alias={alias}
            routes={subRoutes}
            renderIcon={renderIcon}
            renderItem={renderItem}
          />
        </div>,
        document.body,
      )}
    </React.Fragment>
  );
};

BlockMenu.defaultProps = {
  title: 'Show your system name in "title"',
};

export default BlockMenu;
