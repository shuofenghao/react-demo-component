import { IRoute } from 'umi';

const router: IRoute[] = [
  {
    routes: [
      {
        path: '/',
        component: '@/Layouts',
        routes: [
          {
            path: '/',
            icon: 'HomeOutlined',
            menuTitle: '首页',
            component: '@/pages/Home',
          },
          {
            path: '/demo',
            menuTitle: '示例代码',
            icon: 'TrophyOutlined',
            routes: [
              {
                path: '/demo/abort-fetch',
                menuTitle: '中止请求-aborControll',
                component: '@/pages/Demo/AbortFetch',
              },
              {
                path: '/demo/cancel-token',
                menuTitle: '中止请求-cancelToken',
                component: '@/pages/Demo/CancelToken',
              },
            ],
          },
          {
            path: '/components',
            icon: 'GoldOutlined',
            menuTitle: '自定义实现组件',
            routes: [
              {
                path: '/components/overflow-tips',
                menuTitle: 'Tips·溢出文本显示ToolTip',
                component: '@/pages/Component/OverFlowTips',
              },
              {
                path: '/components/progress',
                menuTitle: 'Progress·进度条',
                component: '@/pages/Component/Progress',
              },
              {
                path: '/components/modal',
                menuTitle: 'Modal·弹窗',
                component: '@/pages/Component/Modal',
              },
              { redirect: '/components/overflow-tips' },
            ],
          },
          {
            path: '/3d',
            icon: 'GoldOutlined',
            menuTitle: 'Three - 示例',
            routes: [
              {
                path: '/3d/demo1',
                menuTitle: '案例1',
                component: '@/pages/3D/Demo1',
              },
            ],
          },
        ],
      },
    ],
  },
];

export default router;
