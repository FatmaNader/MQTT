//  this is the server

const port = process.env.PORT || 3000;

//require all dependencies.
var debug = require('debug')('MQTT:server');
var http = require('http');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var app = express(),
  http = require('http'),
  busboy = require("then-busboy");


//body parser middle ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

//handle static files
app.use('/public', express.static(__dirname + '/public'));

//adjust views and ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.listen(port, function() {
  console.log('Server started on port ' + port);
});

index(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.error(err);
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
