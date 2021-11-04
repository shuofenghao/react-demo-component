import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  mfsu: {
    development: { output: '.mfsu-dev' },
  },
  routes: [{ path: '/', component: '@/pages/Home' }],
  fastRefresh: {},
});
