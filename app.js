var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var logger = require('morgan');
var bodyParser = require('body-parser');
var welcomeRoutes = require('./routes/welcome');
var db = require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', welcomeRoutes);


app.listen(port, function(){
	console.log('Listening on locahost:'+port);
});