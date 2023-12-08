import { createStyles, css } from 'antd-style';

export default createStyles(
  ({ token }) => {
    console.log(token);

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
            border-radius: ${token.borderRadius}px;
            font-size: ${token.fontSize}px;
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

          .nav-menu-item + .nav-menu-item {
            margin-left: ${token.margin}px;
          }

          &.vertical {
            flex-direction: column;
          }
        }

        .nav-menu-popup {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          z-index: 990;
          min-width: 240px;
          max-width: 1200px;
          padding: 16px;
          margin-top: 8px;
          background-color: ${token.colorBgElevated};
          border-radius: ${token.borderRadius}px;
          box-shadow: ${token.boxShadowSecondary};
        }
      }
    `;
  },
  { hashPriority: 'low' },
);
