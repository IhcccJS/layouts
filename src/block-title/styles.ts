import { createStyles, css } from 'antd-style';

export default createStyles(
  ({ token }) => {
    return css`
      &.block-title {
        position: relative;
        display: flex;
        align-items: center;

        .logo {
          max-height: 36px;
          margin-right: 16px;
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
            color: var(--color-text-desc, #e2e8f0);
          }
        }

        &-horizontal {
          height: 100%;
          flex-direction: row;
          padding-block: 6px;
          box-sizing: border-box;

          .title .text {
            line-height: 22px;
            font-size: 22px;
          }

          .title .sub-title {
            margin-top: 6px;
            line-height: 14px;
            font-size: 14px;
            text-align: center;
          }
        }

        &-vertical {
          padding-bottom: 36px;

          .title .sub-title {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
          }
        }
      }

      @media (max-width: ${token.screenMD}px) {
        &.block-title {
          .logo {
            max-height: 24px;
          }

          .title .text {
            font-size: 20px;
          }
        }
      }
    `;
  },
  { hashPriority: 'low' },
);
