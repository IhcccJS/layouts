import Block from './block/index';
import BlockMenu from './block-menu/index';
import BlockTitle from './block-title/index';
import BlockUser from './block-user/index';
import Card from './card/index';
import LayoutEdit from './layout-edit/index';
import LayoutFile from './layout-file/index';
import LayoutLogin from './layout-login/index';
import LayoutSite from './layout-site/index';
import Separate from './separate/index';

/** @deprecated `LayoutNavMenu` 组件已经被弃用了，请使用 `LayoutSite` 替代 */
export const LayoutNavMenu = LayoutSite;

export { Block, BlockMenu, BlockTitle, BlockUser, Card, LayoutEdit, LayoutFile, LayoutLogin, LayoutSite, Separate };
