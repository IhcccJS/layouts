import React from 'react';

import useStyles from './styles';

const Card: React.FC<any> = (props) => {
  const { title, children, bodyStyle, footer, ...restProps } = props;
  const { styles, cx } = useStyles();

  return (
    <div className={cx(styles, "card")} {...restProps}>
      {title && <div className={cx(styles, "head")}>{title}</div>}
      <div className={cx(styles, "body")} style={bodyStyle}>
        {children}
      </div>
      {footer && <div className={cx(styles, "footer")}>{footer}</div>}
    </div>
  );
};

export default Card;
