// eslint-disable-next-line import/no-extraneous-dependencies
import react from '@vitejs/plugin-react-swc';
import path from 'path';
// eslint-disable-next-line import/no-extraneous-dependencies
import { visualizer } from 'rollup-plugin-visualizer';
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';
// eslint-disable-next-line import/no-extraneous-dependencies
import removeConsole from 'vite-plugin-remove-console';

export default defineConfig({
  plugins: [
    react(),
    removeConsole(),
    visualizer({
      template: 'list', // or sunburst, treemap, network, raw-data (json), list (yaml)
      filename: 'analyse.yaml', // will be saved in project's root
      // template: 'treemap',
      // filename: 'analyse.html',
      gzipSize: true,
      brotliSize: true,
      emitFile: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      public: `${path.resolve(__dirname, './public/')}`,
    },
  },
  proxy: {
    '/api1': {
      target: 'http://q1.qlogo.cn',
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api1/, '/'),
    },
    '/api2': {
      target: 'http://users.qzone.qq.com/fcg-bin',
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api2/, '/'),
    },
  },
});
