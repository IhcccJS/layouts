import { createStyles, css } from 'antd-style';

export default createStyles(
  ({ token }) => {
    return css`
      &.main {
        height: 100vh;
        box-sizing: border-box;
        // min-height: 720px;
        color: var(--color-text, #f8fafc);
        background-color: var(--color-bg, #020617);

        .container {
          position: relative;
          height: 100%;
          display: flex;
          background-image: var(--image-bg-layout-login, linear-gradient(0deg, #27272a, #334155));
          background-repeat: no-repeat;
          background-position: center bottom;
          background-size: cover;
        }

        .content {
          position: relative;
          width: 420px;
          min-width: 340px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 60px 20px 20px;
          margin: 0 auto;
          box-sizing: border-box;
          background-color: var(--color-bg-component, #374151);
          box-shadow: 0 0px 4px 0 rgba(0, 0, 0, 0.1);
          z-index: 10;
          transition: 0.2s;
        }

        .side {
          flex: 1;
          height: 100%;
        }

        .body {
          position: relative;
          padding-block: 40px;
        }

        .footer {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 20px;
          padding: 0 20px;
          text-align: right;
        }

        &.float {
          padding: 16px;

          .container {
            border-radius: 16px;
            box-shadow: ${token.boxShadow};
          }
        }

        &.blur .content {
          background-color: var(--color-bg-blur, rgba(55, 65, 81, 0.4));
          backdrop-filter: blur(8px);
        }

        &.centered .block-title {
          justify-content: center;
        }

        &.centered .sub-title,
        &.centered .footer {
          text-align: center;
        }

        &.align {
          &-left .content {
            margin: unset;
            border-left: none;
          }

          &-right .container {
            flex-direction: row-reverse;
          }

          &-right .content {
            margin-left: auto;
            margin-right: 0;
            border-right: none;
          }

          &-left,
          &-center,
          &-right {
            .content {
              width: 35%;
            }

            .content > *:not(.footer) {
              width: 420px;
              max-width: 100%;
            }
          }
        }

        &.float.align {
          &-left .content {
            border-radius: 16px 0 0 16px;
          }

          &-right .content {
            border-radius: 0 16px 16px 0;
          }
        }

        &.blocked .container {
          align-items: center;
        }

        &.blocked .content {
          width: auto;
          height: auto;
          min-height: 420px;
          padding-top: 20px;
        }

        &.blocked.align-center {
          .content {
            border-radius: 16px;
          }
        }

        &.blocked.align-left,
        &.blocked.align-right {
          .content {
            border-radius: 16px;
            margin-inline: 6vw;
          }
        }

        &.bordered .content {
          border-width: 0;
          border-style: solid;
          border-color: var(--color-border, #4b5563);
        }

        &.bordered.align-center .content,
        &.bordered.align-left .content {
          border-right-width: 4px;
        }

        &.bordered.align-center .content,
        &.bordered.align-right .content {
          border-left-width: 4px;
        }

        &.bordered.blocked .content {
          border-width: 4px;
        }

        .copyright {
          color: var(--color-text-desc, #e2e8f0);

          span {
            margin: 0 4px;
            font-size: 14px;
          }
        }
      }

      @media (max-width: ${token.screenMD}px) {
        &.main {
          .container {
            background-size: cover;
          }

          .side {
            display: none;
          }

          .content {
            width: 100% !important;
          }

          &.bordered .content {
            border: 4px solid #fff;
          }

          &.blocked {
            &.align-left,
            &.align-center,
            &.align-right {
              .content {
                height: 100%;
                padding-top: 60px;
                margin-inline: 0;
                border-radius: 0;
              }
            }
          }

          &.float {
            &.align-left,
            &.align-center,
            &.align-right {
              .content {
                border-radius: 16px;
              }
            }
          }
        }
      }
    `;
  },
  { hashPriority: 'low' },
);
