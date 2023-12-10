import { createStyles, css } from 'antd-style';

export default createStyles(
  ({ token }) => {
    console.log(token);

    const contentWidthFixed = 1200;

    return css`
      &.layout {
        background-color: ${token.colorBgLayout};
        min-height: 100vh;

        .main-header {
          position: relative;
          padding-inline: ${token.paddingContentHorizontalLG}px;
          display: flex;
          justify-content: center;
          background-color: ${token.colorBgBase};

          .header-content {
            width: 100%;
            display: flex;
            box-sizing: border-box;
          }

          .left-content {
            height: 100%;
            display: flex;
            align-items: center;
          }

          .nav {
            height: 100%;
            flex: 1;
            display: flex;
            align-items: center;
            margin-left: 24px;
            margin-right: 24px;
          }

          .right-content {
            height: 100%;
            display: flex;
            align-items: center;
          }

          &.fixed {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 10;
            box-shadow: ${token.boxShadowTertiary};
          }

          &.blur {
            background-color: ${token.colorBgBlur};
            backdrop-filter: blur(8px);
          }

          &.float {
            background-color: transparent;

            .header-content {
              padding-inline: ${token.paddingContentHorizontalLG}px;
              border-radius: ${token.borderRadiusLG}px;
              background-color: ${token.colorBgBase};
            }

            &.fixed {
              box-shadow: none;

              .header-content {
                box-shadow: ${token.boxShadowSecondary};
              }
            }

            &.blur {
              backdrop-filter: none;

              .header-content {
                background-color: ${token.colorBgBlur};
                backdrop-filter: blur(8px);
              }
            }
          }
        }

        .main-header,
        .main-header-placeholder {
          height: 64px;

          &.float {
            padding-block: ${token.paddingContentVerticalLG}px;
          }
        }

        .main-body {
          width: 100%;
          padding-inline: ${token.paddingContentHorizontalLG}px;
          box-sizing: border-box;
        }

        &.header-width-fixed {
          .header-content {
            width: ${contentWidthFixed}px;
          }
        }

        &.content-width-fixed {
          .main-body {
            width: ${contentWidthFixed}px;
            max-width: calc(100% - ${token.paddingContentHorizontalLG * 2}px);
            margin: 0 auto;
            padding-inline: 0;
          }
        }
      }
    `;
  },
  { hashPriority: 'low' },
);
