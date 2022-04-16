const path = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.bundle.js",
    library: "ReactRouterRedux",
    libraryTarget: "umd",
  },
  devServer: {
    port: 3010,
    static: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.scss$/,
        use: [
          miniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          "postcss-loader",
        ],
      },
    ],
  },
  plugins: [new miniCssExtractPlugin()],
};
