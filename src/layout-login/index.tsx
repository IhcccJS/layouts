import React from 'react';
import BlockTitle from '../block-title';

import useStyles from './styles';

const Copyright: React.FC<any> = ({ icon, text }) => {
  return (
    <div className="copyright">
      {text && (
        <div>
          {icon}
          <span>{text}</span>
        </div>
      )}
    </div>
  );
};

const Layout: React.FC<any> = (props) => {
  const {
    className,
    float = false,
    align,
    blur = false,
    bordered,
    blocked,
    centered = false,
    titleOutside,
    logo,
    title,
    subTitle,
    footer,
    sideContent,
    renderContainer,
    children,
  } = props;
  const { styles, cx } = useStyles();

  const titleDom = <BlockTitle logo={logo} title={title} subTitle={subTitle} direction="vertical" />;

  const content = (
    <React.Fragment>
      <div className={cx(styles, 'content', titleOutside && 'title-outside')}>
        {titleDom}
        <div className={cx(styles, 'body')}>{children}</div>
        <div className={cx(styles, 'footer')}>{footer}</div>
      </div>
      {sideContent && align !== 'center' && <div className={cx(styles, 'side')}>{sideContent}</div>}
    </React.Fragment>
  );

  return (
    <div
      className={cx(
        styles,
        className,
        'main',
        float && 'float',
        bordered && 'bordered',
        blocked && 'blocked',
        blur && 'blur',
        centered && 'centered',
        align && 'align-' + align,
      )}
    >
      <div className={cx(styles, 'container')}>{renderContainer ? renderContainer(content) : content}</div>
    </div>
  );
};

(Layout as any).Copyright = Copyright;

export default Layout;
