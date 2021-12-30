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
            component: '@/pages/Home',
          },
          {
            path: '/home',
            component: '@/pages/Home',
          },
          {
            path: '/demo',
            routes: [
              {
                path: '/demo/abort-fetch',
                component: '@/pages/Demo/AbortFetch',
              },
              {
                path: '/demo/cancel-token',
                component: '@/pages/Demo/CancelToken',
              },
            ],
          },
          {
            path: '/components',
            routes: [
              {
                path: '/components/overflow-tips',
                component: '@/pages/Component/OverFlowTips',
              },
              {
                path: '/components/progress',
                component: '@/pages/Component/Progress',
              },
              {
                path: '/components/modal',
                component: '@/pages/Component/Modal',
              },
              { redirect: '/components/overflow-tips' },
            ],
          },
          {
            path: '/3d',
            routes: [
              {
                path: '/3d/demo1',
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
