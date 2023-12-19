import React from 'react';
import { LayoutNavMenu, BlockTitle, BlockMenu, BlockUser, Card } from '@ihccc/layouts';
import Icon from './icon';
import routes from './routes';

let loaded = {};

const loadScript = (src) => {
  if (loaded[src]) return;
  loaded[src] = true;
  const script = document.createElement('script');
  script.src = src;
  script.type = 'text/javascript';
  document.head.appendChild(script);
};

const renderIcon = ({ icon }) => {
  return <Icon type={icon} />;
};

const menus = [
  { key: 'personal', label: '个人信息', icon: 'icon-renyuan' },
  { key: 'member', label: '会员中心', icon: 'icon-huiyuan' },
  { key: 'setting', label: '系统设置', icon: 'icon-shezhi' },
  { key: 'logout', label: '退出登录', icon: 'icon-tuisong' },
];

function Demo() {
  const [float, setFloat] = React.useState(false);
  const [blur, setBlur] = React.useState(false);
  const [fixedHeader, setFixedHeader] = React.useState(true);
  const [contentWidth, setContentWidth] = React.useState('fixed');

  React.useEffect(() => {
    loadScript('/font_3310509_jrhf4hrcd78.js');
  }, []);

  return (
    <React.Fragment>
      <div style={{ position: 'fixed', bottom: 32, right: 32, zIndex: 999 }}>
        <button onClick={() => setFloat(!float)}>float</button>
        <button onClick={() => setBlur(!blur)}>blur</button>
        <button onClick={() => setFixedHeader(!fixedHeader)}>fixedHeader</button>
        <button onClick={() => setContentWidth(contentWidth === 'fixed' ? 'fluid' : 'fixed')}>contentWidth</button>
      </div>
      <LayoutNavMenu
        float={float}
        blur={blur}
        fixedHeader={fixedHeader}
        contentWidth={contentWidth}
        // heightLayoutHeader={48}
        renderTitle={<BlockTitle logo="/logo.png" title="Test Balabala System" direction="horizontal" />}
        renderMenu={<BlockMenu location={location} routes={routes} renderIcon={renderIcon} />}
        renderButton={
          <>
            <span title="查询" style={{ paddingInline: 8 }}>
              <Icon type="icon-chazhao" />
            </span>
            <span title="通知" style={{ paddingInline: 8 }}>
              <Icon type="icon-xiaoxi" />
            </span>
          </>
        }
        renderExtra={
          <BlockUser icon={'icon'} username={'admin'} role={'admin'} menus={menus} renderIcon={renderIcon} />
        }
      >
        <div style={{ paddingBlock: '24px' }}>
          <h1 style={{ marginTop: 0 }}>PageHome</h1>
          {new Array(10).fill(0).map((_, index) => (
            <Card key={index}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores atque consectetur debitis
              distinctio doloremque ducimus eaque eos expedita explicabo fugiat harum ipsam iure magnam necessitatibus
              nemo nihil quae quas quibusdam quidem quo repellat repudiandae sapiente sed sequi sint soluta tempora
              tenetur
            </Card>
          ))}
        </div>
      </LayoutNavMenu>
    </React.Fragment>
  );
}

export default Demo;
