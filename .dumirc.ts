import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'dist-layouts',
  hash: true,
  base: '/', // 根路径
  publicPath: '/', // 静态文件路径
  resolve: {
    atomDirs: [{ type: 'util', dir: 'src' }],
  },
  favicons: [],
  themeConfig: {
    name: '@ihccc/layouts',
    title: '@ihccc/layouts',
    // logo: '',
  },
  styles: ['section.dumi-default-header-left { width: 300px; }'],
});
