import { createStyles, css } from 'antd-style';

export default createStyles(
  () => {
    return css`
      &.layout-sider {
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
          transform: translateX(0);
          z-index: var(--z-index-side, 190);
          // transition: 0.4s ease;

          &-style {
            height: 100%;
            background-image: var(--image-bg-layout-side, unset);
            background-color: var(--color-bg-layout-side, #2e394c);
            box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
          }

          &-content {
            display: flex;
            flex-direction: column;
          }

          &-placeholder {
            width: 0;
            // transition: 0.4s ease;
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

          &-handler {
            position: absolute;
            top: 0;
            right: -10px;
            bottom: 0;
            width: 12px;
            display: flex;
            align-items: center;
          }
        }

        .page-content {
          flex: 1;
          box-sizing: border-box;
          overflow: hidden;
        }

        &-float .page-side {
          padding: var(--size-cell-gap, 16px);
          padding-right: 0;

          &-style {
            border-radius: var(--size-border-radius-lg, 8px);
          }

          &-float-top {
            top: calc(var(--size-layout-header-height, 52px) + var(--size-cell-gap, 16px));
          }
        }
      }

      /** 关闭 */
      &.layout-sider-close .page-side,
      &.layout-sider-close .page-side-placeholder {
        transform: translateX(-100%);
      }

      /** 折叠 */
      &.layout-sider-collapse .page-side,
      &.layout-sider-collapse .page-side-placeholder,
      &.layout-sider-collapse.layout-sider-auto-close .page-side:hover + .page-side-placeholder {
        width: var(--size-layout-side-collapse-width, 80px);
      }

      /** 打开 */
      &.layout-sider-open .page-side,
      &.layout-sider-open .page-side-placeholder,
      &.layout-sider-open.layout-sider-auto-close .page-side:hover + .page-side-placeholder {
        width: var(--size-layout-side-open-width, 256px);
      }

      /** 扩展 */
      &.layout-sider-expand .page-side {
        width: var(--size-layout-side-expand-width, 30%);
      }
      &.layout-sider-expand .page-side-placeholder {
        width: var(--size-layout-side-open-width, 256px);
      }

      /** 半屏 */
      &.layout-sider-half .page-side {
        width: 50%;
      }
      &.layout-sider-half .page-side-placeholder {
        width: var(--size-layout-side-open-width, 256px);
      }

      /** 全屏 */
      &.layout-sider-full .page-side {
        width: 100%;
      }
      &.layout-sider-full .page-side-placeholder {
        width: var(--size-layout-side-open-width, 256px);
      }

      /** 自由 */
      &.layout-sider-free .page-side {
        // position: sticky;
        // top: var(--size-layout-header-height, 52px);
        // height: calc(100vh - var(--size-layout-header-height, 52px));
      }

      &.layout-sider-auto-close {
        .page-side,
        .page-side-placeholder {
          transform: translateX(-100%);
        }
        .page-side-placeholder {
          width: 0;
        }
        &:not(.layout-sider-close) .page-side:hover {
          transform: translateX(0);
        }
      }

      &.layout-sider-float.layout-sider-full .page-side {
        width: calc(100% - var(--size-cell-gap, 16px));
      }

      &.layout-with-float .page-side-rift {
        padding: var(--size-cell-gap, 16px);
      }
    `;
  },
  { hashPriority: 'low' },
);
