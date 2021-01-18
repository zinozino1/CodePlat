const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      // node server
      // front-end 3000 port 에서 줄 때 target을 5000 port로 주겠다는 의미
      target: "http://localhost:4000",
      changeOrigin: true,
    }),
  );
};
