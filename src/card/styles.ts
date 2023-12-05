import { createStyles, css } from 'antd-style';

export default createStyles(
  ({ token }) => {
    return css`
      &.card {
        position: relative;
        background-color: #fff;
        border-radius: 4px;

        & + .card {
          margin-top: 20px;
        }

        .head {
          font-size: 16px;
          font-weight: bold;
          padding: 16px;
          border-bottom: 1px solid #e5e5e5;
        }

        .body {
          position: relative;
          padding: 20px;
        }

        .footer {
          border-top: 1px solid #e5e5e5;
          padding: 6px;
        }
      }
    `;
  },
  { hashPriority: 'low' },
);
