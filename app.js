var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan('dev'));

app.get('/', function(req,res) {
	res.send('Hello world');
});





console.log('server listening');






app.listen(3000);