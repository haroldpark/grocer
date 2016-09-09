var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/public'));

var port = process.env.PORT || 3000;

var server = app.listen(port, function() {
  console.log('http://localhost:' + port);
})

module.exports = app;
