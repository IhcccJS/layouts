import React from 'react';
import Card from "../card";

import useStyles from './styles';

const PageLayout: React.FC<any> = (props) => {
  const { header, side, bodyHeader, bodyFooter, bodyStyle, children } = props;
  const { styles, cx } = useStyles();

  return (
    <div className={cx(styles, "page")}>
      <div className={cx(styles, "main")}>
        <div className={cx(styles, "head")}>
          <Card>{header}</Card>
        </div>
        <div className={cx(styles, "body")}>
          <Card title={bodyHeader} footer={bodyFooter} bodyStyle={bodyStyle}>{children}</Card>
        </div>
      </div>
      <div className={cx(styles, "side")}>{side}</div>
    </div>
  );
};

export default PageLayout;
