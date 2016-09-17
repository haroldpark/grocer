var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var http = require('http');


// Twilio Credentials
var accountSid = 'ACc1eab5b80242af09944b1d4303e6fd13';
var authToken = 'c7d2d1a004d7cf57564e9009d052b760';

//require the Twilio module and create a REST client
var twilio = require('twilio')(accountSid, authToken);

app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/public'));

var port = process.env.PORT || 1337;


app.post('/api/getRecipes', function(req, res) {
  var query = req.body.query;
  var params = '&app_id=9bf0d886&app_key=58189d20d2000cb5f640fe9b43c5c629';
  var options = {
    host: 'api.edamam.com',
    path: '/search?to=20&q=' + query + params
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

app.post('/api/sendList', function(req, res) {
  var phoneNumber = req.body.number;
  var shoppingList = req.body.list;

  twilio.messages.create({
   to: phoneNumber,
   from: "+19097643193",
   body: shoppingList,
  }, function(err, message) {
   console.log(message.sid);
  });
});


var server = app.listen(port, function() {
  console.log('http://localhost:' + port);
})

module.exports = app;
