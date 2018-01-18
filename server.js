const express = require('express');
const request = require('request');
const path = require('path');
const webpack = require('webpack');
const isPro = process.env.NODE_ENV === 'production';
const webpackConfig = require('./webpack.dev.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const HTML_FILE = path.join(__dirname, 'dist', 'index.html');
const app = express();
const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
}));
app.use(webpackHotMiddleware(compiler));
app.get('*', (req, res, next) => {
  compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
    res.set('content-type', 'text-html');
    res.send(result);
    res.end();
  });
});
app.listen(3003, () => {
  console.log('app server in 3003');
});