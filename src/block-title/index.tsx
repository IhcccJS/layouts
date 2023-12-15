import React from 'react';

import useStyles from './styles';

const BlockTitle: React.FC<any> = (props) => {
  const { logo, title, subTitle, direction, style } = props;
  const { styles, cx } = useStyles();

  return (
    <div className={cx(styles, 'block-title', subTitle && direction && ('block-title-' + direction))} style={style}>
      {typeof logo === 'string' ? <img className={cx(styles, 'logo')} src={logo} alt="logo" /> : logo}
      <div className={cx(styles, 'title')}>
        <h2 className={cx(styles, 'text')}>{title}</h2>
        {subTitle && <div className={cx(styles, 'sub-title')}>{subTitle}</div>}
      </div>
    </div>
  );
};

BlockTitle.defaultProps = {
  title: 'Show your system name in "title"',
};

export default BlockTitle;
