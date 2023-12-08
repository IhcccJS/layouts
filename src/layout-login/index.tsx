import React from 'react';
import BlockTitle from '../block-title';

import useStyles from './styles';

const Copyright: React.FC<any> = ({ icon, text }) => {
  return (
    <div className='copyright'>
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
  const { float, align, blur, block, centered, logo, title, subTitle, footer, sideContent, children } = props;
  const { styles, cx } = useStyles();

  return (
    <div
      className={cx(styles, "main",
        float && "float",
        block && "block",
        blur && "blur",
        centered && "centered",
        align && 'align-' + align,
      )}
    >
      <div className={cx(styles, 'container')}>
        <div className={cx(styles, 'content')}>
          <BlockTitle logo={logo} title={title} subTitle={subTitle} style={{ marginBottom: 32 }} />
          <div className={cx(styles, 'body')}>{children}</div>
          <div className={cx(styles, 'footer')}>{footer}</div>
        </div>
        {sideContent && align !== "center" && (
          <div className={cx(styles, 'side')}>
            {sideContent}
          </div>
        )}
      </div>
    </div>
  );
};

Layout.defaultProps = {
  float: false,
  blur: false,
  centered: false,
  title: 'Show your system name in "title"',
};

(Layout as any).Copyright = Copyright;

export default Layout;
