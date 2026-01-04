import React from 'react';
import { LayoutSite, BlockTitle, BlockMenu, BlockUser, Card } from '@ihccc/layouts';
import useControl from './useControl';
import Icon from './icon';
import routes from './routes';

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
  const { controlView, autoClose, siderState, float, blur, fixedHeader, contentWidth } = useControl();

  const onMenuClick = (item) => {
    console.log(item);
  };

  return (
    <React.Fragment>
      {controlView}
      <LayoutSite.Sider
        float={float}
        autoClose={autoClose}
        status={siderState.status}
        renderHandlerIcon={
          <span style={{ fontSize: 12, transform: 'rotateZ(90deg)' }}>
            <Icon type="icon-up" />
          </span>
        }
        rift={'顶栏冲突区域'}
        header={<div style={{ height: 100 }}>顶部区域</div>}
        body={<div style={{ height: 2000 }}>侧边内容</div>}
        footer={<div style={{ height: 100 }}>底部区域</div>}
      >
        <LayoutSite
          float={float}
          blur={blur}
          fixedHeader={fixedHeader}
          contentWidth={contentWidth}
          style={{ '--size-layout-header-height': '80px' }}
          renderTop={
            <div style={{ background: '#F44336', color: '#fff', paddingBlock: 4, textAlign: 'center' }}>Hello!</div>
          }
          renderTitle={
            <BlockTitle logo={BASE_PATH + '/logo.png'} title="Test Balabala System" direction="horizontal" />
          }
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
              avatar={'avatar'}
              username={'name'}
              role={'admin'}
              menus={menus}
              menuRender={(menuDom) => (
                <div style={{ width: 200 }}>
                  <div style={{ borderBottom: '1px solid var(--color-border)' }}>头部</div>
                  <div style={{ paddingBlock: 8 }}>{menuDom}</div>
                  <div style={{ borderTop: '1px solid var(--color-border)' }}>尾部</div>
                </div>
              )}
              renderIcon={renderIcon}
              onMenuClick={onMenuClick}
            />
          }
        >
          <div style={{ padding: 16 }}>
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
        </LayoutSite>
      </LayoutSite.Sider>
    </React.Fragment>
  );
}

export default Demo;
