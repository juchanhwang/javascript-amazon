const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: ["./src/main.js"],
  output: {
    path: path.resolve(__dirname, "dist/js"),
    filename: "bundle.js"
  },
  plugins: [
    new MiniCssExtractPlugin({
      // template: ["./src/amazon.css"],
      filename: "app.css"
    }),
    new HtmlWebpackPlugin({
      template: "./src/amazon.html",
      filename: "amazon.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, "src/js")],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "style-loader", "css-loader"],
        exclude: /node_modules/
      }
    ]
  },
  devtool: "source-map",
  mode: "development"
};
