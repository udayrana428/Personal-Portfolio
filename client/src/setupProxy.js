// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/projects',
    createProxyMiddleware({
      target: 'https://alert-deer-beret.cyclic.app',
      changeOrigin: true,
    })
  );
};
