import React from 'react';
import { LayoutLogin } from '@ihccc/layouts';
import LoginForm from './form';
import './login-bg.css';

function Demo() {
  return (
    <LayoutLogin
      className="customStyle"
      blur
      align="right"
      logo={BASE_PATH + '/logo.png'}
      title="Test Balabala System"
      subTitle="Welcome back~"
      sideContent={<div style={{ padding: 32 }}>sideContent</div>}
      footer={<LayoutLogin.Copyright text="2020-2023 Test Balabala" />}
    >
      <LoginForm />
    </LayoutLogin>
  );
}

export default Demo;
