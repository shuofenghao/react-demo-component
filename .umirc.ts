import { defineConfig } from 'umi';
import routes from './config/router';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  mfsu: {
    development: { output: '.mfsu-dev' },
  },
  routes,
  fastRefresh: {},
});
