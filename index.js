var express = require('express');
var app = express();
const path = require('path')
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/profili', function (req, res) {
    res.sendFile(path.join(__dirname, 'profili.html'));
});
app.get('/profili/tom', function (req, res) {
  res.sendFile(path.join(__dirname, './profili/tom.html'));
  app.use(express.static(__dirname + '/profili'));
});
app.get('/profili/sarah', function (req, res) {
  res.sendFile(path.join(__dirname, './profili/sarah.html'));
  app.use(express.static(__dirname + '/profili'));
});
app.get('/profili/caroline', function (req, res) {
  res.sendFile(path.join(__dirname, './profili/caroline.html'));
  app.use(express.static(__dirname + '/profili'));
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});