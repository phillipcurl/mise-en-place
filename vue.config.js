const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "demo")
      }
    },
    entry: {
      app: path.join(__dirname, "demo", "main.js")
    }
  }
};
