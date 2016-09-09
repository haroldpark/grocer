var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var http = require('http');

app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/public'));
// app.use(function(err, req, res, next) {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });

var port = process.env.PORT || 1337;

app.post('/api/getRecipes', function(req, res) {
  var query = req.body.query;
  console.log('query', query)

  var options = {
    host: '/api.edamam.com',
    path: '/search?to=50&q=' + query + '&app_id=9bf0d886&app_key=58189d20d2000cb5f640fe9b43c5c629'
  };

  http.get(options, function (response) {
    var str = '';

    response.on('data', function (chunk) {
      str += chunk;
    });

    response.on('end', function () {
      res.send(str);
    });
  });
});


var server = app.listen(port, function() {
  console.log('http://localhost:' + port);
})

module.exports = app;
