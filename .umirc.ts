import { defineConfig } from 'umi';
import routes from './config/router';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  copy: ['./src/pages/Home/hooks/worker.js', './src/pages/Home/hooks/utils.js'],
  mfsu: {
    development: { output: '.mfsu-dev' },
  },
  routes,
  fastRefresh: {},
});
