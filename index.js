var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  First = require('./api/models/firstModel'),
  User=require("./api/models/userModel"),
  bodyParser = require('body-parser');
var methodOverride = require('method-override');
//mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/suji');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));
//
//// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/portal'));
//
require('./routes')(app); // configure our routes-- create routes.js 
//// routes ==================================================
var routes = require('./api/routes/firstRoutes');
routes(app);

app.listen(port);

console.log('print viz is ready on ' + port);
