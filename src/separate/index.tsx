import React from "react";
import useStyles from './styles';

const Separate: React.FC<any> = ({ className, children }) => {
  const { styles, cx } = useStyles();

  return (
    <div className={cx(styles, 'ihccc-layout-separate', className)}>{children}</div>
  )
}

const Start: React.FC<any> = ({ className, children }) => {
  const { styles, cx } = useStyles();

  return (
    <div className={cx(styles, 'ihccc-layout-separate-start', className)}>{children}</div>
  )
}

const Center: React.FC<any> = ({ className, children }) => {
  const { styles, cx } = useStyles();

  return (
    <div className={cx(styles, 'ihccc-layout-separate-center', className)}>{children}</div>
  )
}

const End: React.FC<any> = ({ className, children }) => {
  const { styles, cx } = useStyles();

  return (
    <div className={cx(styles, 'ihccc-layout-separate-end', className)}>{children}</div>
  )
}

(Separate as any).Start = Start;
(Separate as any).Center = Center;
(Separate as any).End = End;

export default Separate;
