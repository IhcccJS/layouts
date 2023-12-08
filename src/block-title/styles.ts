import { createStyles, css } from 'antd-style';

export default createStyles(
  ({ token }) => {
    return css`
      &.block-title {
        .title {
          display: flex;
          align-items: center;

          .logo {
            width: 32px;
            margin-right: 20px;
          }

          .text {
            margin: 0;
            font-size: 26px;
            font-weight: 600;
          }
        }

        .sub-title {
          margin-top: 20px;
          font-size: 16px;
          color: #a9a9a9;
        }
      }
    `;
  },
  { hashPriority: 'low' },
);
