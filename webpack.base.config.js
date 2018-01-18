const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.join(__dirname, 'index.js'),
    vendor: ['lodash', 'moment'],
    react: ['react', 'react-dom', 'react-redux', 'redux'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|gif|jpg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 8192 },
          },
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['react', 'vendor']
    }),
  ]
}
