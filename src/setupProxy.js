const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    createProxyMiddleware(
      "/api",
      {
        target: "https://api.hiyobi.me",
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    )
  );
  app.use(
    createProxyMiddleware(
      "/cdn",
      {
        target: "https://cdn.hiyobi.me",
        changeOrigin: true,
        pathRewrite: {
          '^/cdn': ''
        }
      }
    )
  );
  app.use(
    createProxyMiddleware(
      "/tn",
      {
        target: "https://tn.hiyobi.me",
        changeOrigin: true,
        headers: {
          referer: "https://hiyobi.me"
        }
      }
    )
  );

}