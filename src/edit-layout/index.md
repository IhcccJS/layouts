---
nav: 布局
title: 编辑器
---

edit-layout 布局组件

```tsx
/**
 * iframe: 480
 * background: #f5f5f5
 */
import { EditLayout as Layout } from "@wowon/layouts";

function Demo () {
  return (
    <Layout.Simple
      header={"header"}
      footer={"footer"}
      left={<div style={{ width: 200 }}>left</div>}
      right={<div style={{ width: 200 }}>right</div>}
      body={"body"}
    />
  )
}

export default Demo;
```


```tsx
/**
 * iframe: 480
 * background: #f5f5f5
 */
import { EditLayout as Layout, Separate } from "@wowon/layouts";

function Demo () {
  return (
    <Layout.Normal
      header={
        <Separate>
          <Separate.Start>Logo</Separate.Start>
          <Separate.End>extra</Separate.End>
        </Separate>
      }
      footer={"version: 0.9.2"}
      left={<div style={{ width: 200 }}>元素列表</div>}
      right={<div style={{ width: 200 }}>检查器</div>}
      top={"操作栏"}
      bottom={"已选择：9个  位置：23,67"}
      body={"操作面板"}
    />
  )
}

export default Demo;
```
