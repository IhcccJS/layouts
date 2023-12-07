import { createStyles, css } from 'antd-style';

export default createStyles(
  ({ token }) => {
    return css`
      &.ihccc-layout-block {
        width: 100%;
        height: 100%;
        min-height: 200px;
        background: ${token.colorPrimary};
        border-radius: ${token.borderRadius};
      }
    `;
  },
  { hashPriority: 'low' },
);
