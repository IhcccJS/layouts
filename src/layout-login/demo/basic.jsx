import React from 'react';
import { LayoutLogin } from '@ihccc/layouts';

const alignOptions = ['left', 'center', 'right'];

function Demo() {
  const [float, setFloat] = React.useState(false);
  const [blur, setBlur] = React.useState(false);
  const [blocked, setBlocked] = React.useState(false);
  const [bordered, setBordered] = React.useState(false);
  const [centered, setCentered] = React.useState(false);
  const [align, setAlign] = React.useState(1);
  return (
    <React.Fragment>
      <div style={{ position: 'absolute', top: 32, right: 32, zIndex: 90 }}>
        <button onClick={() => setFloat(!float)}>float</button>
        <button onClick={() => setBlur(!blur)}>blur</button>
        <button onClick={() => setBlocked(!blocked)}>blocked</button>
        <button onClick={() => setBordered(!bordered)}>bordered</button>
        <button onClick={() => setCentered(!centered)}>centered</button>
        <button onClick={() => setAlign(align + 1 > 2 ? 0 : align + 1)}>align</button>
      </div>
      <LayoutLogin
        float={float}
        blur={blur}
        blocked={blocked}
        bordered={bordered}
        centered={centered}
        align={alignOptions[align]}
        logo="/logo.png"
        title="Test Balabala System"
        subTitle="Welcome back~"
        sideContent={'sideContent'}
        footer={<LayoutLogin.Copyright text="2020-2023 Test Balabala" />}
      >
        <style>
          {`
            .form-group + .form-group {
              margin-top: 1.5em;
            }
            .form-group label {
              display: block;
              margin-bottom: 0.5em;
              color: #495057;
            }
            .form-control {
              display: block;
              width: 100%;
              box-sizing: border-box;
              padding: .25em .75em;
              font-size: 1em;
              line-height: 1.5;
              color: #495057;
              background-color: #fff;
              border: 1px solid #ced4da;
            }
            .btn {
              margin-top: 4vh;
              width: 100%;
              padding: .25em .75em;
              font-size: 18px;
              text-align: center;
              border: 1px solid transparent;
            }
            .btn-primary {
              color: #fff;
              background-color: #007bff;
              border-color: #007bff;
            }
            .btn-primary:hover {
              color: #fff;
              background-color: #0069d9;
              border-color: #0062cc;
            }
          `}
        </style>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" id="username" placeholder="Username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </LayoutLogin>
    </React.Fragment>
  );
}

export default Demo;
