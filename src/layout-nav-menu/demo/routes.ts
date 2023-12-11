export default [
  {
    name: '首页',
    path: '/home',
    icon: 'icon-shangcheng',
  },
  {
    name: '设备管理',
    path: '/device',
    icon: 'icon-peizhi',
    children: [
      {
        name: '设备列表',
        path: '/a',
        icon: 'icon-chazhao',
      },
      {
        name: '设备安装',
        path: '/b',
        icon: 'icon-fuzhi',
      },
      {
        name: '设备监测',
        path: '/c',
        icon: 'icon-tongzhi',
      },
      {
        name: '问题记录',
        path: '/d',
        icon: 'icon-xiugai',
      },
    ],
  },
  {
    name: '用户档案',
    path: '/user',
    icon: 'icon-renyuan',
    children: [
      {
        name: '开户管理',
        path: '/a',
        icon: 'icon-mima',
      },
      {
        name: '用户巡查',
        path: '/b',
        icon: 'icon-shaixuan',
      },
      {
        name: '销户管理',
        path: '/c',
        icon: 'icon-shanchu',
      },
    ],
  },
  {
    name: '用户中心',
    path: '/center',
    icon: 'icon-daohang',
    children: [
      {
        name: '个人信息',
        path: '/account',
        icon: 'icon-guanyu',
      },
      {
        name: '用户设置',
        path: '/setting',
        icon: 'icon-shezhi',
        children: [
          {
            name: '本地设置',
            path: '/local',
          },
          {
            name: '系统设置',
            path: '/system',
          },
        ],
      },
    ],
  },
];
