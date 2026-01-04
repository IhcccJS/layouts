import React from 'react';
import { LayoutLogin } from '@ihccc/layouts';
import LoginForm from './form';
import SigninForm from './form-signin';
import './login-bg.css';
import './tabs.css';

function Demo() {
  const [signin, setSignin] = React.useState(false);
  return (
    <LayoutLogin
      className="customStyle"
      blur
      blocked
      centered
      align={signin ? 'right' : 'left'}
      logo={BASE_PATH + '/logo.png'}
      title="Test Balabala System"
      sideContent={<div style={{ padding: 32 }}>sideContent</div>}
      footer={<LayoutLogin.Copyright text="2020-2023 Test Balabala" />}
    >
      <div className="login-tabs">
        <div className={'login-tab' + (signin ? '' : ' login-tab-active')} onClick={() => setSignin(false)}>
          登录
        </div>
        <div className={'login-tab' + (signin ? ' login-tab-active' : '')} onClick={() => setSignin(true)}>
          注册
        </div>
      </div>
      {signin ? <SigninForm /> : <LoginForm />}
    </LayoutLogin>
  );
}

export default Demo;
