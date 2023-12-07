---
nav: 布局
title: 登录页
---

LayoutLogin 登录页布局组件

```tsx
/**
 * iframe: 580
 * background: #f5f5f5
 */
import React from "react";
import { LayoutLogin } from "@ihccc/layouts";

const alignOptions = ["left", "center", "right"];

function Demo () {
  const [float, setFloat] = React.useState(true);
  const [blur, setBlur] = React.useState(true);
  const [centered, setCentered] = React.useState(false);
  const [align, setAlign] = React.useState(1);
  return (
    <React.Fragment>
      <div style={{ position: "absolute", top: 32, right: 32, zIndex: 10 }}>
        <button onClick={() => setFloat(!float)}>float</button>
        <button onClick={() => setBlur(!blur)}>blur</button>
        <button onClick={() => setCentered(!centered)}>centered</button>
        <button onClick={() => setAlign(align + 1 > 2 ? 0 : align + 1)}>align</button>
      </div>
      <LayoutLogin
        float={float}
        blur={blur}
        centered={centered}
        align={alignOptions[align]}
        // logo="/logo.png"
        title="Test Balabala System"
        desc="Welcome back~"
        sideContent={"sideContent"}
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
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </LayoutLogin>
    </React.Fragment>
  )
}

export default Demo;
```


```tsx
/**
 * iframe: 580
 * background: #f5f5f5
 */
import React from "react";
import { LayoutLogin } from "@ihccc/layouts";

function Demo () {
  return (
    <LayoutLogin
      blur
      align="right"
      // logo="/logo.png"
      title="Test Balabala System"
      desc="Welcome back~"
      sideContent={
        <div style={{ padding: 32 }}>sideContent</div>
      }
      footer={<LayoutLogin.Copyright text="2020-2023 Test Balabala" />}
    >
      <style>
        {`
          .main .container {
            /* background by SVGBackgrounds.com */
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%2392bdfe' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%2389a8fc' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%238194fb' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%23787ff9' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%236F6AF8' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
            backdrop-filter: blur(10px);
          }
          .main.blur .content {
            background-color: #dbc3ed38;
          }
        `}
      </style>
      Login form
    </LayoutLogin>
  )
}

export default Demo;
```
