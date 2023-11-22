import { createStyles, css } from 'antd-style';

export default createStyles(
  ({ token }) => {
    const borderColor = token.colorBorder || '#f1f1f1';

    return css`
      &.wowon-layout-edit {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        min-height: 480px;

        &-bordered {
          box-sizing: border-box;
          border: 1px solid ${borderColor};
          border-radius: 6px;
        }

        &-header {
          padding: 8px 16px;
          border-bottom: 1px solid ${borderColor};
        }

        &-row {
          flex: 1;
          position: relative;
          display: flex;
        }

        &-col {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        &-body {
          flex: 1;
        }

        &-side {
          display: flex;
          flex-direction: column;

          &-left {
            border-right: 1px solid ${borderColor};
          }

          &-right {
            border-left: 1px solid ${borderColor};
          }
        }

        &-footer {
          padding: 8px 16px;
          border-top: 1px solid ${borderColor};
        }
      }
    `;
  },
  { hashPriority: 'low' },
);
