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
          gap: var(--size-cell-gap, 16px);
          box-sizing: border-box;
          cursor: pointer;
        }

        &-avatar {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--color-border, #d9d9d9);
          border-radius: var(--size-border-radius-lg, 8px);
          box-shadow: ${token.boxShadowTertiary};
          overflow: hidden;
        }

        &-info {
          display: flex;
          flex-direction: column;
        }

        &-name {
          color: var(--color-text, #ffffff);
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
          background: var(--color-primary);
          border-radius: 4px;
        }

        &-menu {
          position: absolute;
          top: 100%;
          right: 0;
          padding-top: 12px;
          transform: translateY(-10px);
          visibility: hidden;
          opacity: 0;
          z-index: -1;
          transition: 0.3s ease 0.15s;

          &-panel {
            padding: 4px;
            border-radius: var(--size-border-radius, 4px);
            background: var(--color-bg-popover, #1e293b);
            box-shadow: ${token.boxShadowSecondary};
          }

          &-list {
            min-width: 120px;
            list-style: none;
            margin-block: 0;
            padding-inline-start: 0;
          }

          &-item {
            position: relative;
            display: flex;
            align-items: center;
            padding: 4px 0 4px 32px;
            border-radius: var(--size-border-radius, 4px);
            white-space: nowrap;
            cursor: pointer;
            transition: 0.1s ease-in-out;

            &-icon {
              position: absolute;
              left: 4px;
              line-height: 14px;
              font-size: 16px;
            }

            &-label {
              font-size: 14px;
            }

            &:hover {
              background: var(--color-bg-component-hover, #374151);
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
          transform: translateY(0);
          visibility: visible;
          opacity: 1;
          z-index: 999;
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
            background: transparent;
          }

          &-avatar {
            width: 56px;
            height: 56px;
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
              background: transparent;
              box-shadow: none;
            }
          }
        }
      }
    `;
  },
  { hashPriority: 'low' },
);
