import React from 'react';
import { LayoutLogin } from '@ihccc/layouts';

function Demo() {
  return (
    <LayoutLogin
      blur
      align="right"
      logo="/logo.png"
      title="Test Balabala System"
      subTitle="Welcome back~"
      sideContent={<div style={{ padding: 32 }}>sideContent</div>}
      footer={<LayoutLogin.Copyright text="2020-2023 Test Balabala" />}
    >
      <style>
        {`
          .main .container {
            /* background by SVGBackgrounds.com */
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%2392bdfe' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%2389a8fc' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%238194fb' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%23787ff9' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%236F6AF8' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: center bottom;
          }
          .main.blur .content {
            background-color: #dbc3ed38;
          }
        `}
      </style>
      Login form
    </LayoutLogin>
  );
}

export default Demo;
