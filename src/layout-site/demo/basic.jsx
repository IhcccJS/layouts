import React from 'react';
import { LayoutSite, BlockTitle, BlockMenu, BlockUser, Card } from '@ihccc/layouts';
import { loadCss, loadScript } from '@ihccc/utils';
import Icon from './icon';
import routes from './routes';

(() => {
  // 加载图标库
  loadScript('/font_3310509_jrhf4hrcd78.js');
  // 加载主题变量
  loadCss('/default-dark.css');
  document.documentElement.setAttribute('data-theme', 'defaultDark');
})();

const siderStatusList = ['close', 'collapse', 'open', 'expand', 'halfScreen', 'fullScreen', 'free'];

const renderIcon = ({ icon }) => {
  if (!icon) return null;
  return <Icon type={icon} />;
};

const menus = [
  { key: 'personal', label: '个人信息', icon: 'icon-renyuan' },
  { key: 'member', label: '会员中心', icon: 'icon-huiyuan' },
  { key: 'setting', label: '系统设置', icon: 'icon-shezhi' },
  { key: 'logout', label: '退出登录', icon: 'icon-tuisong' },
];

function Demo() {
  const [siderStatus, setSiderStatus] = React.useState(2);
  const [float, setFloat] = React.useState(false);
  const [blur, setBlur] = React.useState(false);
  const [fixedHeader, setFixedHeader] = React.useState(true);
  const [contentWidth, setContentWidth] = React.useState('fluid');

  const siderState = React.useMemo(() => {
    let index = siderStatus;
    index = index <= 0 ? siderStatusList.length : index;
    index = index >= siderStatusList.length ? 0 : index;
    return { index, status: siderStatusList[index] };
  }, [siderStatus]);

  const onMenuClick = (item) => {
    console.log(item);
  };

  return (
    <React.Fragment>
      <div style={{ position: 'fixed', bottom: 32, right: 32, zIndex: 999, display: 'flex', gap: 8 }}>
        <button onClick={() => setSiderStatus(siderState.index + 1)}>{siderState.status}</button>
        <button onClick={() => setFloat(!float)}>float</button>
        <button onClick={() => setBlur(!blur)}>blur</button>
        <button onClick={() => setFixedHeader(!fixedHeader)}>fixedHeader</button>
        <button onClick={() => setContentWidth(contentWidth === 'fixed' ? 'fluid' : 'fixed')}>contentWidth</button>
      </div>
      <LayoutSite
        float={float}
        blur={blur}
        fixedHeader={fixedHeader}
        contentWidth={contentWidth}
        // heightLayoutHeader={48}
        renderTitle={<BlockTitle logo="/logo.png" title="Test Balabala System" direction="horizontal" />}
        renderMenu={<BlockMenu blur={blur} location={location} routes={routes} renderIcon={renderIcon} />}
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
          <BlockUser
            icon={'icon'}
            username={'admin'}
            role={'admin'}
            menus={menus}
            menuHeader={'菜单头部'}
            renderIcon={renderIcon}
            onMenuClick={onMenuClick}
          />
        }
      >
        <LayoutSite.Sider
          status={siderState.status}
          rift={'顶栏冲突区域'}
          header={<div style={{ height: 100 }}>顶部区域</div>}
          body={<div style={{ height: 2000 }}>侧边内容</div>}
          footer={<div style={{ height: 100 }}>底部区域</div>}
        >
          <div style={{ padding: '24px' }}>
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
        </LayoutSite.Sider>
      </LayoutSite>
    </React.Fragment>
  );
}

export default Demo;
