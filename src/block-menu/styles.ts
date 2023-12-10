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

            &-title {
              font-size: ${token.fontSizeLG}px;
              font-weight: ${token.fontWeightStrong};

              .nav-menu {
                margin-top: ${token.margin}px;
              }
            }

            &-link {
              border-radius: ${token.borderRadius}px;
              font-size: ${token.fontSize}px;
              font-weight: normal;
              color: ${token.colorTextBase};
              cursor: pointer;
              transition: background-color 0.2s ease-in-out;

              &-active {
                color: ${token.colorLinkActive};
                font-size: ${token.fontSizeXL}px;
                font-weight: ${token.fontWeightStrong};
              }

              &:hover {
                color: ${token.colorInfoTextHover};
                background-color: rgba(230, 230, 230, 0.4);
              }
            }
          }

          &-nest {
            align-items: flex-start;
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
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 990;
          min-width: 240px;
          max-width: 1200px;
          padding: 16px;
          background-color: ${token.colorBgElevated};
          border-radius: ${token.borderRadius}px;
          transform: translateY(-100%);
          transition: 0.2s ease-in-out;

          &-open {
            margin-top: 8px;
            transform: translateY(56px);
            box-shadow: ${token.boxShadowSecondary};
          }
        }

        &:hover {
          .nav-menu-popup {
            margin-top: 8px;
            transform: translateY(56px);
            box-shadow: ${token.boxShadowSecondary};
          }
        }
      }
    `;
  },
  { hashPriority: 'low' },
);
