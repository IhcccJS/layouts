import React from 'react';
import { LayoutNavMenu, Card } from '@ihccc/layouts';
import routes from './routes';

function Demo() {
  const [float, setFloat] = React.useState(false);
  const [blur, setBlur] = React.useState(false);
  const [fixedHeader, setFixedHeader] = React.useState(false);
  const [contentWidth, setContentWidth] = React.useState('fluid');
  return (
    <React.Fragment>
      <div style={{ position: 'fixed', top: 96, right: 32, zIndex: 999 }}>
        <button onClick={() => setFloat(!float)}>float</button>
        <button onClick={() => setBlur(!blur)}>blur</button>
        <button onClick={() => setFixedHeader(!fixedHeader)}>
          fixedHeader
        </button>
        <button
          onClick={() =>
            setContentWidth(contentWidth === 'fixed' ? 'fluid' : 'fixed')
          }
        >
          contentWidth
        </button>
      </div>
      <LayoutNavMenu
        logo="/logo.png"
        title="Test Balabala System"
        // subTitle="balabala 子系统"
        float={float}
        blur={blur}
        fixedHeader={fixedHeader}
        contentWidth={contentWidth}
        // heightLayoutHeader={48}
        routes={routes}
        location={{ pathname: '/home' }}
      >
        <div style={{ paddingBlock: '40vh' }}>
          <h1>PageHome</h1>
          {new Array(10).fill(0).map((_, index) => (
            <Card key={index}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
              asperiores atque consectetur debitis distinctio doloremque ducimus
              eaque eos expedita explicabo fugiat harum ipsam iure magnam
              necessitatibus nemo nihil quae quas quibusdam quidem quo repellat
              repudiandae sapiente sed sequi sint soluta tempora tenetur
            </Card>
          ))}
        </div>
      </LayoutNavMenu>
    </React.Fragment>
  );
}

export default Demo;
