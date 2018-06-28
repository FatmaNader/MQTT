var mqtt= require('mqtt');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "SocialNetwork"
});

var User = require('../models/user');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});
var data = [];
module.exports = function(app) {
  app.get('/login', function(req, res, next) {

    res.render('login.ejs');
    next();
  });
