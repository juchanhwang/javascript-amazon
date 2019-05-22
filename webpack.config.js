const path = require('path');

module.exports = {
  entry: './src/amazon.html',
  output: {
    path: path.resolve(__dirname, 'dist/js')
    ,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src/html')
        ],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  devtool: 'source-map',
  mode: 'development'
}