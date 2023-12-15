import React from 'react';
import { LayoutLogin } from '@ihccc/layouts';
import useStateBar from './useStateBar';
import LoginForm from './form';

function Demo() {
  const { view, float, blur, blocked, bordered, centered, align } = useStateBar();

  return (
    <React.Fragment>
      {view}
      <LayoutLogin
        float={float}
        blur={blur}
        blocked={blocked}
        bordered={bordered}
        centered={centered}
        align={align}
        logo="/logo.png"
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
