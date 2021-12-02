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
            component: '@/pages/Demo',
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
        ],
      },
    ],
  },
];

export default router;
