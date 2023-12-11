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
            padding: 4px 12px;
            font-size: ${token.fontSize}px;
            color: #2b2929;
            cursor: pointer;

            & > a {
              display: flex;
              align-items: center;
            }

            &-icon {
              margin-right: ${token.marginXS}px;
            }

            &-title {
              position: relative;
              padding: 4px 16px 4px 12px;

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
              color: ${token.colorTextBase};
              transition: background-color 0.2s ease-in-out;

              &-active {
                color: ${token.colorLinkActive};
              }

              &:hover {
                background-color: rgba(230, 230, 230, 0.4);
              }
            }

            &:hover {
              color: ${token.colorInfoTextHover};
            }
          }

          &-horizontal {
            flex-direction: row;

            & > .nav-menu-item + .nav-menu-item {
              margin-left: ${token.margin}px;
            }
          }

          &-vertical {
            flex-direction: column;
          }
        }

        .nav-menu-popup {
          position: fixed;
          top: 56px;
          left: 0;
          right: 0;
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
    `;
  },
  { hashPriority: 'low' },
);
