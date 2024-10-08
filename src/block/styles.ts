import { createStyles, css } from 'antd-style';

export default createStyles(
  () => {
    return css`
      &.ihccc-layout-block {
        width: 100%;
        height: 100%;
        min-height: 200px;
        background: var(--color-primary);
        border-radius: var(--size-border-radius-sm);
      }
    `;
  },
  { hashPriority: 'low' },
);
