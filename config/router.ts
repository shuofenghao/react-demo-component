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
              { redirect: '/components/progress' },
            ],
          },
        ],
      },
    ],
  },
];

export default router;
