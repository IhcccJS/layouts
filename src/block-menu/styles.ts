import { createStyles, css } from 'antd-style';

export default createStyles(
  ({ token }) => {
    return css`
      &.block-menu {
        position: relative;
        width: 100%;
        height: 100%;

        .nav-menu {
          height: 100%;
          display: flex;
          align-items: center;
          margin-block-start: 0;
          margin-block-end: 0;
          padding-inline-start: 0;
          list-style-type: none;

          .nav-menu-item {
            padding: 4px 20px 4px 0;
            font-size: ${token.fontSize}px;
            color: var(--color-text, #2b2929);
            cursor: pointer;

            &-text {
              position: relative;
              display: flex;
              align-items: center;
              padding-left: 32px;
              white-space: nowrap;
            }

            &-icon {
              position: absolute;
              left: 4px;
              top: 50%;
              transform: translateY(-50%);
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
              color: var(--color-text, ${token.colorTextBase});
              transition: background-color 0.2s ease-in-out;

              &-active {
                color: var(--color-text-active, ${token.colorLinkActive});
              }

              &:hover {
                background-color: var(--color-bg-hover, rgba(230, 230, 230, 0.4));
              }
            }

            &:hover {
              color: var(--color-text-hover, ${token.colorInfoTextHover});
            }

            & + .nav-menu-item {
              margin-left: 16px;
            }
          }
        }

        .nav-menu-popup {
          position: absolute;
          top: 100%;
          left: 0;
          // right: 0;
          z-index: -1;
          opacity: 0;
          visibility: hidden;
          display: flex;
          min-width: 240px;
          max-width: 1200px;
          padding: 16px;
          background-color: ${token.colorBgElevated};
          border-radius: 0 0 ${token.borderRadius}px ${token.borderRadius}px;
          transform: translateY(8px);
          transition-duration: 0.2s;
          transition-easing: ease-in-out;
          box-shadow: ${token.boxShadowTertiary};
        }

        .nav-menu-item:hover {
          & > .nav-menu-popup {
            transform: translateY(0);
            z-index: 990;
            opacity: 1;
            visibility: visible;
            transition-duration: 0.4s;
          }
        }
      }

      @media (max-width: ${token.screenMD}px) {
        &.block-menu {
          .nav-menu {
            width: 100%;
            flex-direction: column;
            align-items: flex-start;
          }

          .nav-menu .nav-menu-item {
            width: 100%;
            padding: 4px 0;

            &-title {
              padding: 8px 0;
              font-size: 16px;
              color: var(--color-text-desc, #b5b5b5);

              &::after {
                display: none;
              }
            }

            & + .nav-menu-item {
              margin-left: 0;
              margin-top: 8px;
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
