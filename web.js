'use strict';

var express = require('express');

var app = express();

app.use(express.urlencoded());
app.use(express.json());

app.post('/test', function(req, res) {
  console.log('body:', req.body);
  res.send('hi');
});

var PORT = 4000;
console.log('listening on ' + PORT);
app.listen(PORT);
