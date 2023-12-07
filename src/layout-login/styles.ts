import { createStyles, css } from 'antd-style';

export default createStyles(
  ({ token }) => {
    console.log(token);

    return css`
      &.main {
        height: 100vh;
        box-sizing: border-box;
        // min-height: 720px;

        .container {
          height: 100%;
          display: flex;
          /* background by SVGBackgrounds.com */
          background-color: #f5fbff;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%239bc2d8' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%235a6685' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%2385abd6' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%235f7295' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%237193d8' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%238a9ab5' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%236c80d9' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%238ea4c1' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%236b74e8' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%237b98ba' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%237f7cf6' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%239dbad9' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");

          background-attachment: fixed;
          background-size: 100%;
          background-repeat: no-repeat;
          background-position: center bottom;
        }

        .content {
          position: relative;
          width: 420px;
          padding: 64px 20px 20px;
          margin: 0 auto;
          box-sizing: border-box;
          background-color: rgba(255, 255, 255, 0.8);
          border-left: 4px solid #fff;
          border-right: 4px solid #fff;
          box-shadow: 0 0px 4px 0 rgba(0, 0, 0, 0.1);
          transition: 0.2s;
        }

        .side {
          flex: 1;
        }

        .header {
          margin-bottom: 32px;

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

          .desc {
            margin-top: 20px;
            font-size: 16px;
            color: #a9a9a9;
          }
        }

        .body {
          position: relative;
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

        &.blur {
          .content {
            background-color: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(8px);
          }
        }

        &.centered {
          .title {
            justify-content: center;
            text-align: center;
          }

          .desc,
          .footer {
            text-align: center;
          }
        }

        &.align {
          &-left {
            .content {
              margin: unset;
              border-left: none;
            }
          }

          &-right {
            .container {
              flex-direction: row-reverse;
            }

            .content {
              margin-left: auto;
              margin-right: 0;
              border-right: none;
            }
          }

          &-left,
          &-center,
          &-right {
            .content {
              width: 35%;
              min-width: 420px;
              display: flex;
              flex-direction: column;
              align-items: center;
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

        &.block {
          .container {
            align-items: center;
          }

          .content {
            width: auto;
            height: auto;
            border-radius: 16px;
            padding: 20px 20px 64px;
            border: 4px solid #fff;
          }

          &.align-left {
            .content {
              margin-left: 12vw;
            }
          }

          &.align-right {
            .content {
              margin-right: 12vw;
            }
          }
        }

        .copyright {
          color: #727272;

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
            border-left: none;
            border-right: none;
          }

          &.float.align-left .content,
          &.float.align-center .content,
          &.float.align-right .content {
            border-radius: 16px;
            border: 4px solid #fff;
          }
        }
      }
    `;
  },
  { hashPriority: 'low' },
);
