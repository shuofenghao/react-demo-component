import { IRoute } from 'umi';

const router: IRoute[] = [
  {
    routes: [
      {
        path: '/',
        component: '@/Layouts',
        routes: [
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
                path: '/components/progress',
                component: '@/pages/Component/Progress',
              },
              { redirect: '/components/progress' },
            ],
          },
          { redirect: '/home' },
        ],
      },
    ],
  },
];

export default router;
