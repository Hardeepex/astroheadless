// remix.config.js
const path = require('path');

module.exports = {
  // Define the server build directory
  serverBuildDirectory: path.join(__dirname, 'dist', 'server'),

  // Define the assets build directory
  assetsBuildDirectory: path.join(__dirname, 'public', 'build'),

  // Define the public path for serving assets
  publicPath: '/build/',

  // Define the server entry file
  server: path.join(__dirname, 'src', 'entry.server.tsx'),

  // Define the browser entry file
  appDirectory: path.join(__dirname, 'src'),

  // Define the routes for the Remix application
  routes: async (defineRoutes) => {
    return defineRoutes((route) => {
      // Define routes here
      // Example: route('/about', 'about.tsx');
    });
  },

  // Define ignored routes that should not be handled by Remix
  ignoredRouteFiles: ['**/.*', '**/*.css', '**/*.test.{js,jsx,ts,tsx}'],

  // Additional configurations can be added here if necessary
};
