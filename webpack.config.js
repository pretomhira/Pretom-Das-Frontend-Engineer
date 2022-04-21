const path = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.bundle.js",
    library: "ReactRouterRedux",
    libraryTarget: "umd",
    publicPath: "/",
  },
  devServer: {
    port: 3010,
    static: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
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
