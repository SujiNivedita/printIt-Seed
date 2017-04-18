var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  //file = mongoose.model('./api/models/fileModel'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override');

//mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/NewDb');
require('./api/models/firstModel');
require("./api/models/userModel");
require("./api/models/fileModel");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

//// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/portal'));
//uploadd file to gridfs
const busboyBodyParser = require('busboy-body-parser');
app.use(busboyBodyParser({ limit: '16mb' }));
//end
require('./routes')(app); // configure our routes-- create routes.js
//// routes ==================================================
var routes = require('./api/routes/firstRoutes');
routes(app);

app.listen(port);

console.log('print viz is ready on ' + port);
