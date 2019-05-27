const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: ["./src/main.js", "./src/amazon.css", "./src/carouselUI/css/carousel.css", "./src/searchUI/style/autocomplete.css"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "app.css"
    }),
    new HtmlWebpackPlugin({
      template: "./src/amazon.html",
      filename: "index.html",
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
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        exclude: /node_modules/
      }
    ]
  },
  devtool: "source-map",
  mode: "development"
};