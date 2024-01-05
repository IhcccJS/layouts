import { createStyles, css } from 'antd-style';

export default createStyles(
  ({ token }) => {
    return css`
      &.block-menu {
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        margin-block-start: 0;
        margin-block-end: 0;
        padding-inline-start: 0;
        list-style-type: none;

        &-vertical {
          flex-direction: column;
          align-items: flex-start;

          .nav-menu-item {
            width: 100%;
            margin: 0;
            margin-top: 8px;
          }
        }
      }

      .nav-menu-item {
        padding: 2px 16px 2px 4px;
        margin: 0 8px;
        box-sizing: border-box;
        cursor: pointer;

        &-render {
          display: flex;
          align-items: center;
          line-height: 14px;
          font-size: ${token.fontSize}px;
          color: var(--color-text, #f8fafc);
        }

        &-text {
          position: relative;
          display: flex;
          align-items: center;
          white-space: nowrap;
          padding-block: 4px;
        }

        &-icon {
          margin-right: 4px;
        }

        &-title {
          position: relative;

          &::after {
            content: '';
            position: absolute;
            right: 0;
            top: 50%;
            width: 6px;
            height: 6px;
            border-right: 1px solid #afb0b2;
            border-bottom: 1px solid #afb0b2;
            transform: translateY(-50%) rotate(45deg);
          }
        }

        &-link {
          border-radius: ${token.borderRadius}px;
          transition: background-color 0.2s ease-in-out;

          &-active {
            color: var(--color-text-active, ${token.colorLinkActive});
          }

          &:hover {
            background-color: var(--color-bg-component-hover, #374151);
          }
        }

        &:hover {
          color: var(--color-text-hover, ${token.colorInfoTextHover});
        }
      }

      &.nav-menu-column {
        min-width: 160px;
      }

      &.nav-menu-popup {
        position: fixed;
        top: 64px;
        left: 50%;
        transform: translate(-50%, 8px);
        width: 1200px;
        min-height: 480px;
        display: flex;
        padding: 16px;
        background-color: var(--color-bg-popover, #1e293b);
        border-radius: 0 0 ${token.borderRadius}px ${token.borderRadius}px;
        transition-duration: 0.4s;
        transition-easing: ease-out;
        box-shadow: ${token.boxShadowTertiary};
        z-index: -1;
        opacity: 0;
        visibility: hidden;

        &-blur {
          background-color: var(--color-bg-blur, rgba(55, 65, 81, 0.4));
          backdrop-filter: blur(8px);
        }

        &-open,
        &:hover {
          transform: translate(-50%, 0);
          z-index: 990;
          opacity: 1;
          visibility: visible;
          transition-duration: 0.2s;
        }
      }

      @media (max-width: ${token.screenMD}px) {
        &.block-menu {
          .nav-menu {
            width: 100%;
            flex-direction: column;
            align-items: flex-start;

            .nav-menu-item {
              width: 100%;
              padding: 4px;
              margin: 0;

              &-title {
                color: var(--color-text-desc, #b5b5b5);

                &::after {
                  display: none;
                }
              }

              & + .nav-menu-item {
                margin-top: 8px;
              }
            }
          }

          .nav-menu-popup {
            position: relative;
            top: auto;
            background-color: transparent;
            box-shadow: none;
            min-width: auto;
            padding: 0;
            margin-top: 8px;
            opacity: 1;
            visibility: visible;
            z-index: 10;
            transform: translateY(0);
          }
        }
      }
    `;
  },
  { hashPriority: 'low' },
);
