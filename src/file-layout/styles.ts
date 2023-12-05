import { createStyles, css } from 'antd-style';

export default createStyles(
  ({ token }) => {
    return css`
      &.page {
        position: relative;
        display: flex;
        background: #f5f5f5;
        padding: 20px;
        box-sizing: border-box;
        height: 100vh;

        .main {
          position: relative;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .head {
          position: relative;
          margin-bottom: 20px;
        }

        .body {
          position: relative;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .side {
          position: relative;
          width: 480px;
          padding-left: 20px;
          height: 100%;
          overflow: auto;
        }
      }
    `;
  },
  { hashPriority: 'low' },
);
