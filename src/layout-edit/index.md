---
nav: 布局
title: 编辑器
---

LayoutEdit 布局组件

```tsx
/**
 * iframe: 480
 * background: #f5f5f5
 */
import { LayoutEdit as Layout } from "@ihccc/layouts";

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
import { LayoutEdit as Layout, Separate } from "@ihccc/layouts";

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


```tsx
/**
 * iframe: 480
 * background: #f5f5f5
 */
import { LayoutEdit as Layout } from "@ihccc/layouts";

function Demo () {
  return (
    <Layout>
        <Layout.Row>
        <Layout.Side>
          <div style={{ width: 200 }}>元素列表</div>
        </Layout.Side>
      <Layout.Col>
        <Layout.Header>header</Layout.Header>
        <Layout.Col>
          <Layout.Body>body</Layout.Body>
        </Layout.Col>
      </Layout.Col>
        </Layout.Row>
    </Layout>
  )
}

export default Demo;
```
