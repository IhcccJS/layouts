import React from 'react';
import { LayoutLogin } from '@ihccc/layouts';
import useControl from './useControl';
import LoginForm from './form';

function Demo() {
  const { controlView, float, blur, blocked, bordered, centered, align } = useControl();

  return (
    <React.Fragment>
      {controlView}
      <LayoutLogin
        titleOutside
        float={float}
        blur={blur}
        blocked={blocked}
        bordered={bordered}
        centered={centered}
        align={align}
        logo={BASE_PATH + '/logo.png'}
        title="Test Balabala System"
        subTitle="Welcome back~"
        sideContent={'sideContent'}
        footer={<LayoutLogin.Copyright text="2020-2023 Test Balabala" />}
      >
        <LoginForm />
      </LayoutLogin>
    </React.Fragment>
  );
}

export default Demo;
