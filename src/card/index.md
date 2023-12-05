---
nav: 布局
title: 卡片
---

Card 布局组件

```tsx
/**
 * iframe: 480
 * background: #f5f5f5
 */
import { Card } from "@wowon/layouts";

function Demo () {
  return (
    <div style={{ padding: 16, background: "#f5f5f5" }}>
      <Card title="Card2" footer="footer">
        Card2
      </Card>
    </div>
  )
}

export default Demo;
```
