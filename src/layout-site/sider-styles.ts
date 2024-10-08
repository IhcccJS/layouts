import { createStyles, css } from 'antd-style';

export default createStyles(
  () => {
    return css`
      &.layout-with-side {
        display: flex;
      }

      &.page-side {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        width: auto;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        background-image: var(--image-bg-side, unset);
        background-color: var(--color-bg-side, #1e293b);
        box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
        transform: translateX(0);
        z-index: var(--z-index-side, 190);

        &-inner {
          top: var(--size-layout-header-height, 52px);
        }

        &-body {
          position: relative;
          flex: 1;
          overflow: auto;
        }

        &-open {
          width: var(--size-layout-side-width, 256px);
        }

        &-open + &-placeholder {
          min-width: var(--size-layout-side-width, 256px);
        }

        &-placeholder {
          min-width: auto;
        }

        &-footer {
          padding: 12px;
        }
      }

      &.page-main {
        flex: 1;
        padding: @gap;
        box-sizing: border-box;
        overflow: hidden;
        transform: translateX(0);
      }
    `;
  },
  { hashPriority: 'low' },
);
