var webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: __dirname + '/dist/build',
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
    contentBase: './dist',
    port: 3000
  }
}