var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  First = require('./api/models/firstModel'),
  User=require("./api/models/userModel"),
  bodyParser = require('body-parser');				
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/first'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/firstRoutes');
routes(app);

app.listen(port);

console.log('print viz is ready on ' + port);
