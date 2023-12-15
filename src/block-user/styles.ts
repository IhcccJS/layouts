import { createStyles, css } from 'antd-style';

export default createStyles(
  ({ token }) => {
    return css`
      &.block-user {
        position: relative;
        width: 100%;

        &-box {
          padding: 4px 8px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          box-sizing: border-box;
          cursor: pointer;
          transition: 0.2s ease-in-out;

          &:hover {
            background: #f1f1f1;
          }
        }

        &-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #e5e5e5;
          border: 2px solid #fff;
          background-image: url("data:image/svg+xml,%3Csvg t='1702457562705' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='17618' width='32' height='32'%3E%3Cpath d='M512 102.4a204.8 204.8 0 1 0 0 409.6 204.8 204.8 0 0 0 0-409.6zM204.8 307.2a307.2 307.2 0 1 1 614.4 0A307.2 307.2 0 0 1 204.8 307.2z m102.4 512a153.6 153.6 0 0 0-153.6 153.6 51.2 51.2 0 1 1-102.4 0 256 256 0 0 1 256-256h409.6a256 256 0 0 1 256 256 51.2 51.2 0 1 1-102.4 0 153.6 153.6 0 0 0-153.6-153.6H307.2z' fill='%23000000' fill-opacity='.85' p-id='17619'%3E%3C/path%3E%3C/svg%3E");
          background-size: 70%;
          background-repeat: no-repeat;
          background-position: center;
          padding: 4px;
          box-sizing: border-box;
          box-shadow: ${token.boxShadowTertiary};
          overflow: hidden;
        }

        &-info {
          display: flex;
          flex-direction: column;
          margin-left: 16px;
        }

        &-name {
          font-weight: bold;
          font-size: 16px;
        }

        &-extra {
          margin-top: 2px;
          color: #ffffff;
          font-size: 12px;
        }

        &-role {
          padding: 0 4px;
          background: #3a84c0;
          border-radius: 4px;
        }

        &-menu {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          padding-top: 12px;
          z-index: 990;
          display: none;

          &-list {
            min-width: 120px;
            padding: 4px;
            border-radius: 6px;
            background: #fff;
            list-style: none;
            margin-block: 0;
            box-shadow: ${token.boxShadowSecondary};
          }

          &-item {
            display: flex;
            align-items: center;
            padding: 4px 6px;
            border-radius: 6px;
            cursor: pointer;
            transition: 0.1s ease-in-out;

            &-icon {
              line-height: 14px;
              font-size: 16px;
              margin-right: 4px;
            }

            &-label {
              font-size: 14px;
            }

            &:hover {
              background: #f1f1f1;
            }

            &:active {
              transform: scale(0.95);
            }
          }

          &-item + &-item {
            margin-top: 4px;
          }
        }

        &-box:hover + &-menu,
        &-menu:hover {
          display: block;
        }
      }

      @media (max-width: ${token.screenMD}px) {
        &.block-user {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-inline: 16px;

          &-box {
            padding: 6px 12px;
            background: #f1f1f1;
          }

          &-avatar {
            width: 56px;
            height: 56px;
          }

          &-name {
            font-size: 20px;
          }

          &-extra {
            margin-top: 6px;
            font-size: 14px;
          }

          &-menu {
            position: relative;
            display: block;
            width: 100%;

            &-list {
              box-shadow: none;
            }
          }
        }
      }
    `;
  },
  { hashPriority: 'low' },
);
