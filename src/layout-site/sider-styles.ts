import { createStyles, css } from 'antd-style';

export default createStyles(
  () => {
    return css`
      &.layout-with-side {
        display: flex;

        .page-side {
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          width: auto;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          background-image: var(--image-bg-layout-side, unset);
          background-color: var(--color-bg-layout-side, #2e394c);
          box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
          transform: translateX(0);
          z-index: var(--z-index-side, 190);
          transition: 0.4s ease-in-out;

          &-placeholder {
            min-width: auto;
          }

          &-rift {
            min-height: var(--size-layout-header-height, 52px);
            max-height: var(--size-layout-header-height, 52px);
          }

          // &-header {
          //   padding: 12px;
          // }

          &-body {
            position: relative;
            flex: 1;
            overflow: auto;
          }

          // &-footer {
          //   padding: 12px;
          // }
        }

        .page-content {
          flex: 1;
          padding: @gap;
          box-sizing: border-box;
          overflow: hidden;
        }

        /** 关闭 */
        &-close {
          .page-side,
          .page-side-placeholder {
            transform: translateX(-100%);
          }
        }

        /** 折叠 */
        &-collapse {
          .page-side,
          .page-side-placeholder {
            width: var(--size-layout-side-collapse-width, 80px);
          }
        }

        /** 打开 */
        &-open {
          .page-side,
          .page-side-placeholder {
            width: var(--size-layout-side-open-width, 256px);
          }
        }
        /** 扩展 */
        &-expand {
          .page-side {
            width: var(--size-layout-side-expand-width, 30%);
          }
          .page-side-placeholder {
            width: var(--size-layout-side-open-width, 256px);
          }
        }

        /** 半屏 */
        &-halfScreen {
          .page-side {
            width: 50%;
          }
          .page-side-placeholder {
            width: var(--size-layout-side-open-width, 256px);
          }
        }

        /** 全屏 */
        &-fullScreen {
          .page-side {
            width: 100%;
          }
          .page-side-placeholder {
            width: var(--size-layout-side-open-width, 256px);
          }
        }

        /** 自由 */
        &-free {
          .page-side {
            // position: sticky;
            // top: var(--size-layout-header-height, 52px);
            // height: calc(100vh - var(--size-layout-header-height, 52px));
          }
        }
      }

      &.layout-with-side-inner {
        .page-content {
          transform: translateX(0);
        }
      }
    `;
  },
  { hashPriority: 'low' },
);
