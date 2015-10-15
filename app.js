var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

// uncomment after placing your favicon in /public
app.use(logger('dev'));
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(logError);
app.use(clientErrorHandler);
app.use(errorHandler);

// error handlers

function logError (req, res, next) {
  console.log(req,res);
  next(err);
}

function clientErrorHandler (err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({error: "server error :("});
  } else {
    next(err);
  }
}

function errorHandler (err, req, res, next) {
  res.status(500);
}


module.exports = app;
