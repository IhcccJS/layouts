import React from 'react';
import { LayoutNavMenu, Card } from '@ihccc/layouts';
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

function Demo() {
  const [float, setFloat] = React.useState(false);
  const [blur, setBlur] = React.useState(false);
  const [fixedHeader, setFixedHeader] = React.useState(false);
  const [contentWidth, setContentWidth] = React.useState('fluid');

  React.useEffect(() => {
    loadScript('/font_3310509_jrhf4hrcd78.js');
  }, []);

  return (
    <React.Fragment>
      <div style={{ position: 'fixed', top: 96, right: 32, zIndex: 999 }}>
        <button onClick={() => setFloat(!float)}>float</button>
        <button onClick={() => setBlur(!blur)}>blur</button>
        <button onClick={() => setFixedHeader(!fixedHeader)}>fixedHeader</button>
        <button onClick={() => setContentWidth(contentWidth === 'fixed' ? 'fluid' : 'fixed')}>contentWidth</button>
      </div>
      <LayoutNavMenu
        logo="/logo.png"
        title="Test Balabala System"
        // subTitle="balabala~"
        float={float}
        blur={blur}
        fixedHeader={fixedHeader}
        contentWidth={contentWidth}
        // heightLayoutHeader={48}
        routes={routes}
        renderIcon={renderIcon}
        location={{ pathname: '/home' }}
      >
        <div style={{ paddingBlock: '40vh' }}>
          <h1>PageHome</h1>
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
