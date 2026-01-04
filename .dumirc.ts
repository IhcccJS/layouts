import { defineConfig } from 'dumi';

const BASE_PATH = '/ihccc-layouts';

export default defineConfig({
  define: {
    BASE_PATH,
  },
  outputPath: 'dist-layouts',
  hash: true,
  base: `${BASE_PATH}/`, // 根路径
  publicPath: `${BASE_PATH}/`, // 静态文件路径
  resolve: {
    atomDirs: [{ type: 'layouts', dir: 'src' }],
  },
  favicons: [`${BASE_PATH}/logo.png`],
  scripts: [`${BASE_PATH}/font_3310509_jrhf4hrcd78.js`, `${BASE_PATH}/theme-change.js`],
  styles: [
    `${BASE_PATH}/theme/default-dark/index.css`,
    `${BASE_PATH}/theme/default-light/index.css`,
    `${BASE_PATH}/theme/ant.var.css`,
    `${BASE_PATH}/reset.css`,
  ],
  themeConfig: {
    name: '@ihccc/layouts',
    title: '@ihccc/layouts',
    logo: `${BASE_PATH}/logo.png`,
  },
});
