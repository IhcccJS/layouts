import { createStyles, css } from 'antd-style';

export default createStyles(
  ({ token }) => {
    return css`
      &.block-title {
        position: relative;
        display: flex;
        align-items: center;

        .logo {
          max-width: 36px;
          max-height: 36px;
        }

        .title {
          display: flex;
          flex-direction: column;

          .text {
            display: inline;
            margin: 0;
            font-size: 26px;
            font-weight: 600;
          }

          .sub-title {
            font-size: 16px;
            color: #a9a9a9;
          }
        }

        &-horizontal {
          height: 100%;
          flex-direction: row;
          padding-block: 6px;
          box-sizing: border-box;

          .logo {
            margin-right: 8px;
          }

          .title {
            .text {
              line-height: 22px;
              font-size: 22px;
            }

            .sub-title {
              margin-top: 6px;
              line-height: 14px;
              font-size: 14px;
              text-align: center;
            }
          }
        }

        &-vertical {
          padding-bottom: 36px;

          .logo {
            margin-right: 20px;
          }

          .title {
            .sub-title {
              position: absolute;
              left: 0;
              right: 0;
              bottom: 0;
            }
          }
        }
      }
    `;
  },
  { hashPriority: 'low' },
);
