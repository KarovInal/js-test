var webpack = require('webpack');

module.exports = {
  entry: {
    redux: './src/redux.js'
  },
  output: {
    path: __dirname + '/dist/',
    filename: '[name].build.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    port: 3000,
    contentBase: './dist'
  }
}