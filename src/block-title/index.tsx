import React from 'react';

import useStyles from './styles';

const BlockTitle: React.FC<any> = (props) => {
  const { logo, title, subTitle, style } = props;
  const { styles, cx } = useStyles();

  return (
    <div className={cx(styles, 'block-title')} style={style}>
      <div className={cx(styles, 'title')}>
        {typeof logo === 'string' ? <img className={cx(styles, 'logo')} src={logo} alt="logo" /> : logo}
        <h2 className={cx(styles, 'text')}>{title}</h2>
      </div>
      {subTitle && <div className={cx(styles, 'sub-title')}>{subTitle}</div>}
    </div>
  );
};

BlockTitle.defaultProps = {
  title: 'Show your system name in "title"',
};

export default BlockTitle;
