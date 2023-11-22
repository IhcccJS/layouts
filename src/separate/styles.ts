import { createStyles, css } from 'antd-style';

export default createStyles(
  ({ token }) => {
    return css`
      &.wowon-layout-separate {
        position: relative;
        display: flex;

        &-start {
          flex: 1;
        }

        &-center {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        &-end {
        }
      }
    `;
  },
  { hashPriority: 'low' },
);
