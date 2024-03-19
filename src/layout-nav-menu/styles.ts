import { createStyles, css } from 'antd-style';

export default createStyles(
  ({ token }) => {
    const headerHeight = '64px';
    const contentWidthFixed = '1200px';

    return css`
      &.layout {
        position: relative;
        min-height: 100vh;
        color: var(--color-text, #f8fafc);
        background-color: var(--color-bg, #020617);
        background-image: var(--image-bg-body, unset);
        background-attachment: fixed;
        background-size: cover;
        background-position: center bottom;

        .main-header {
          padding-inline: ${token.paddingContentHorizontal}px;
          display: flex;
          justify-content: center;
          background-color: var(--color-bg-header, #1e293b);
          background-image: var(--image-bg-header, unset);
          background-size: cover;

          .header-content {
            width: 100%;
            display: flex;
            justify-content: space-between;
            box-sizing: border-box;
          }

          .left-content {
            height: 100%;
            display: flex;
            align-items: center;
          }

          .toggle-view {
            display: none;
          }

          label {
            position: relative;
            top: 50%;
            transform: translateY(-50%);
            width: 32px;
            height: 32px;
            background-color: var(--color-bg-secondary, #f1f1f1);
            background-image: url('data:image/svg+xml,<svg t="1702520544885" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="53444" width="128" height="128"><path d="M160 320a32 32 0 0 1-32-32V256a32 32 0 0 1 32-32h704a32 32 0 0 1 32 32v32a32 32 0 0 1-32 32H160z m0 240a32 32 0 0 1-32-32v-32a32 32 0 0 1 32-32h704a32 32 0 0 1 32 32v32a32 32 0 0 1-32 32H160zM160 800a32 32 0 0 1-32-32v-32a32 32 0 0 1 32-32h704a32 32 0 0 1 32 32v32a32 32 0 0 1-32 32H160z" fill="%23303133" p-id="53445"></path></svg>');
            background-size: 70%;
            background-repeat: no-repeat;
            background-position: center;
            display: none;
            border-radius: 8px;
          }

          .toggle-view:checked + label {
            background-image: url('data:image/svg+xml,<svg t="1702518760165" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="49569" width="128" height="128"><path d="M579.888 512l190.064-190.064a48 48 0 0 0-67.888-67.872L512 444.112 321.936 254.064a48 48 0 1 0-67.872 67.872L444.112 512 254.064 702.064a48 48 0 1 0 67.872 67.872L512 579.888l190.064 190.064a48 48 0 0 0 67.872-67.888L579.888 512z" fill="" p-id="49570"></path></svg>');
          }

          .header-content-view {
            flex: 1;
            display: flex;
          }

          .header-menu-nav {
            flex: 1;
            height: 100%;
            padding-inline: 24px;
            display: flex;
            align-items: center;
            box-sizing: border-box;
          }

          .header-menu-button {
            margin-right: 24px;
            display: flex;
            align-items: center;
          }

          .header-menu-extra {
            height: 100%;
            display: flex;
            align-items: center;
          }

          &.fixed {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: var(--z-index-header, 200);
            box-shadow: ${token.boxShadowTertiary};
          }

          &.blur {
            background-color: var(--color-bg-blur, rgba(55, 65, 81, 0.4));
            backdrop-filter: blur(8px);
          }

          &.float {
            background-color: transparent;

            .header-content {
              padding-inline: ${token.paddingContentHorizontal}px;
              border-radius: ${token.borderRadiusLG}px;
              background-color: var(--color-bg-header, #1e293b);
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
                background-color: var(--color-bg-blur, rgba(55, 65, 81, 0.4));
                backdrop-filter: blur(8px);
              }
            }
          }
        }

        .main-header,
        .main-header-placeholder {
          height: var(--size-layout-header-height, ${headerHeight});

          &.float {
            padding-block: ${token.paddingContentVerticalLG}px;
          }
        }

        .main-body {
          width: 100%;
          box-sizing: border-box;
        }

        &.header-width-fixed {
          .header-content {
            width: var(--size-layout-content-width, ${contentWidthFixed});
          }
        }

        &.content-width-fixed {
          .main-body {
            width: var(--size-layout-content-width, ${contentWidthFixed});
            max-width: 100%;
            margin: 0 auto;
            padding-inline: 0;
          }
        }
      }

      @media (max-width: ${token.screenMD}px) {
        &.layout {
          .main-header {
            label {
              display: block;
            }

            .toggle-view:checked + label + .header-content-view {
              display: flex;
            }

            .header-content-view {
              position: absolute;
              left: 0;
              right: 0;
              top: var(--size-layout-header-height, ${headerHeight});
              bottom: 0;
              z-index: 990;
              flex-direction: column-reverse;
              justify-content: flex-end;
              align-items: center;
              display: none;
              background-color: var(--color-bg-header, #1e293b);
              overflow: auto;
              height: calc(100vh - var(--size-layout-header-height, ${headerHeight}));
            }

            .header-menu-nav {
              flex: 1;
              width: 100%;
              height: auto;
              border-top: 1px solid var(--color-border, #4b5563);
              padding-block: 16px;
              overflow: auto;
              overscroll-behavior: contain;
            }

            .header-menu-button {
              padding-bottom: 16px;
              margin-right: 0;
            }

            .header-menu-extra {
              width: 100%;
              height: auto;
              padding: 16px 0;
              justify-content: center;
            }

            &.fixed .header-content-view {
              position: fixed;
            }
          }
        }
      }
    `;
  },
  { hashPriority: 'low' },
);
