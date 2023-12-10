export default [
  {
    name: '首页',
    path: '/home',
  },
  {
    name: '设备管理',
    path: '/d',
    children: [
      {
        name: '设备列表',
        path: '/a',
      },
      {
        name: '设备安装',
        path: '/b',
      },
      {
        name: '设备安装',
        path: '/c',
      },
    ],
  },
  {
    name: '用户档案',
    path: '/user',
    children: [
      {
        name: '开户管理',
        path: '/a',
      },
      {
        name: '用户巡查',
        path: '/b',
      },
      {
        name: '销户管理',
        path: '/c',
      },
    ],
  },
];
