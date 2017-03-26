/**
 * Created by sathisu on 3/17/2017.
 */
var express = require('express');
var proxy   = require('express-http-proxy');
var app     = express();

app.use(express.static(__dirname + '/portal'));
var argv = require('minimist')(process.argv.slice(2));
var apiProxy = argv._[0] || argv.api;

app.use('/api', proxy(apiProxy, {
    forwardPath: function(req, res) {
        var reqPath = require('url').parse(req.url).path;
        console.log('Forwarded Path -> ' + reqPath);
        return '/api' + reqPath;
    }
}));
app.listen(process.env.PORT || 3005);
//=========================new mean setup =================================
// modules =================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// configuration ===========================================

// config files
var db = require('./config/db');

// set our port
var port = process.env.PORT || 3005;

// connect to our mongoDB database
// (uncomment after you enter in your own credentials in config/db.js)
// mongoose.connect(db.url);

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

// routes ==================================================
require('./app/routes')(app); // configure our routes

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);

// shoutout to the user
console.log('Magic happens on port ' + port);

// expose app
exports = module.exports = app;

