import React from "react";
import useStyles from './styles';

const Layout: React.FC<any> = ({ bordered, className, children }) => {
  const { styles, cx } = useStyles();

  return (
    <div className={cx(styles, 'wowon-layout-edit', { 'wowon-layout-edit-bordered': bordered }, className)}>
      {children}
    </div>
  )
}

const Header: React.FC<any> = ({ className, children }) => {
  const { styles, cx } = useStyles();
  return (
    <div className={cx(styles, 'wowon-layout-edit-header', className)}>
      {children}
    </div>
  )
}

const Row: React.FC<any> = ({ className, children }) => {
  const { styles, cx } = useStyles();
  return (
    <div className={cx(styles, 'wowon-layout-edit-row', className)}>{children}
    </div>
  )
}

const Col: React.FC<any> = ({ className, children }) => {
  const { styles, cx } = useStyles();
  return (
    <div className={cx(styles, 'wowon-layout-edit-col', className)}>
      {children}
    </div>
  )
}

const Body: React.FC<any> = ({ className, children }) => {
  const { styles, cx } = useStyles();
  return (
    <div className={cx(styles, 'wowon-layout-edit-body', className)}>
      {children}
    </div>
  )
}

const Side: React.FC<any> = ({ placement, className, children }) => {
  const { styles, cx } = useStyles();
  return (
    <div className={cx(styles, 'wowon-layout-edit-side', {
      'wowon-layout-edit-side-left': placement === 'left' || !placement,
      'wowon-layout-edit-side-right': placement === 'right'
    }, className)}>{children}
    </div>
  )
}

const Footer: React.FC<any> = ({ className, children }) => {
  const { styles, cx } = useStyles();
  return (
    <div className={cx(styles, 'wowon-layout-edit-footer', className)}>{children}
    </div>
  )
}

const Simple: React.FC<any> = ({ header, footer, left, right, body }) => {
  return (
    <Layout>
      {header && <Header>{header}</Header>}
      <Row>
        {left && <Side>{left}</Side>}
        <Body>{body}</Body>
        {right && <Side placement="right">{right}</Side>}
      </Row>
      {footer && <Footer>{footer}</Footer>}
    </Layout>
  )
}

const Normal: React.FC<any> = ({ header, footer, left, right, top, bottom, body }) => {
  return (
    <Layout>
      {header && <Header>{header}</Header>}
      <Row>
        {left && <Side>{left}</Side>}
        <Col>
          {top && <Header>{top}</Header>}
          <Body>{body}</Body>
          {bottom && <Footer>{bottom}</Footer>}
        </Col>
        {right && <Side placement="right">{right}</Side>}
      </Row>
      {footer && <Footer>{footer}</Footer>}
    </Layout>
  )
}

(Layout as any).Header = Header;
(Layout as any).Row = Row;
(Layout as any).Col = Col;
(Layout as any).Body = Body;
(Layout as any).Side = Side;
(Layout as any).Footer = Footer;
(Layout as any).Simple = Simple;
(Layout as any).Normal = Normal;

export default Layout;
