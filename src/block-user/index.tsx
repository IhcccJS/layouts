import React from 'react';

import useStyles from './styles';

const BlockUser: React.FC<any> = (props) => {
  const { avatar, username, role, menus, menuHeader, style, onMenuClick, renderIcon } = props;
  const { styles, cx } = useStyles();

  return (
    <div className={cx(styles, 'block-user')} style={style}>
      <div className={cx(styles, 'block-user-box')}>
        <div className={cx(styles, 'block-user-avatar')}>{avatar}</div>
        <div className={cx(styles, 'block-user-info')}>
          <div className={cx(styles, 'block-user-name')}>{username}</div>
          {role && (
            <div className={cx(styles, 'block-user-extra')}>
              <span className={cx(styles, 'block-user-role')}>{role}</span>
            </div>
          )}
        </div>
      </div>
      {Array.isArray(menus) && (
        <div className={cx(styles, 'block-user-menu')}>
          <div className={cx(styles, 'block-user-menu-panel')}>
            {menuHeader}
            <ul className={cx(styles, 'block-user-menu-list')}>
              {menus.map((item: any) => {
                return (
                  <li className={cx(styles, 'block-user-menu-item')} onClick={() => onMenuClick?.(item)} key={item.key}>
                    {item.icon && (
                      <span className={cx(styles, 'block-user-menu-item-icon')}>{renderIcon?.(item) || item.icon}</span>
                    )}
                    <span className={cx(styles, 'block-user-menu-item-label')}>{item.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlockUser;
