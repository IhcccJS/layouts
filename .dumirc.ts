import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'dist-layouts',
  hash: true,
  base: '/layouts/', // 根路径
  publicPath: '/layouts/', // 静态文件路径
  resolve: {
    atomDirs: [{ type: 'util', dir: 'src' }],
  },
  favicons: [
    'https://foruda.gitee.com/avatar/1679452165034642578/11446348_wowon_1679452164.png!avatar32',
  ],
  themeConfig: {
    name: '@wowon/layouts',
    title: '@wowon/layouts',
    logo: 'https://foruda.gitee.com/avatar/1679452165034642578/11446348_wowon_1679452164.png!avatar100',
  },
  styles: ['section.dumi-default-header-left { width: 300px; }'],
});
