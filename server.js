const express = require('express');
const request = require('request');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const compiler = webpack(require('./webpack.config'));
const HTML_FILE = path.join(__dirname, 'dist', 'index.html');

const app = express();

app.use(webpackDevMiddleware(compiler));
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