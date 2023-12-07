import React from "react";
import useStyles from './styles';

const Block: React.FC<{ className: string }> = ({ className }) => {
  const { styles, cx } = useStyles();

  return (
    <div className={cx(styles, 'ihccc-layout-block', className)}></div>
  )
}

export default Block;
