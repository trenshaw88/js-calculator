var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

app.use(express.static(__dirname + '/'));

app.listen(port, function() {
  console.log('I am listening on port 8000!');
});
