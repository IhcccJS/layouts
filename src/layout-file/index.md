---
nav: 布局
title: 文件系统
---

file-layout 布局组件

```tsx
/**
 * iframe: 480
 * background: #f5f5f5
 */
import React from "react";
import { LayoutFile, Card } from "@ihccc/layouts";

function Demo () {
  return (
    <LayoutFile
      header={"header"}
      side={
        <React.Fragment>
          <Card title="Card1">
            Card1
          </Card>
          <Card title="Card2">
            Card2
          </Card>
        </React.Fragment>
      }
      bodyHeader="bodyHeader"
      bodyFooter="bodyFooter"
      bodyStyle={{ padding: 0 }}
    >
      LayoutFile
    </LayoutFile>
  )
}

export default Demo;
```
