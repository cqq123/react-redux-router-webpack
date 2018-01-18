const path = require('path');
const express = require('express');

const app = express();
console.log(path.resolve(__dirname, 'dist'));
app.use('/', express.static(path.resolve(__dirname, 'dist')));
app.listen(3004, () => {
  console.log('listen port 3004--------------------');
});
