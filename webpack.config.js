const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const entry = {
  app: path.join(__dirname, './index.js'),
  vendor: ['lodash', 'moment'],
  react: ['react', 'react-dom', 'react-redux', 'redux'],
}
const output = {
  path: path.resolve(__dirname, 'dist'),
  filename: '[name].js',
}
const imageRule = {
  test: /\.(png|gif|jpg)$/,
  use: [
    {
      loader: 'url-loader',
      options: { limit: 8192 },
    },
  ]
}
const jsRule = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: 'babel-loader',
}
const cssLoader = {
  test: /\.css$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      { loader: 'css-loader', options: { minimize: true } },
      {
        loader: 'postcss-loader',
        options: {
          plugins: () => [require('autoprefixer')],
        },
      },
    ],
  })
}
const sassLoader = {
  test: /\.scss$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader', 'sass-loader'],
    use: [
      {
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[path][name]_[local]--[hash:base64:5]'
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: () => [require('autoprefixer')],
        },
      },
      'sass-loader',
    ]
  }),
}

const rules = [
  imageRule,
  jsRule,
  cssLoader,
  sassLoader,
];
const plugins = [
  new htmlWebpackPlugin({
    template: path.join(__dirname, 'index.html'),
  }),
  new ExtractTextPlugin('app.css'),
  new webpack.optimize.CommonsChunkPlugin({
    names: ['react', 'vendor']
  })
]
module.exports = {
  entry,
  output,
  module: {
    rules,
  },
  devtool: 'inline-source-map',
  plugins,
}