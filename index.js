var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  First = require('./api/models/firstModel'),
  User=require("./api/models/userModel"),
  bodyParser = require('body-parser');
var methodOverride = require('method-override');
//file upload middleare
var multiparty = require('connect-multiparty')();
var fs = require('fs');
//var mongoose = require('mongoose');
var Gridfs = require('gridfs-stream');
router.post('/upload/:id', multiparty, function(req, res){
    var db = mongoose.connection.db;
    var mongoDriver = mongoose.mongo;
    var gfs = new Gridfs(db, mongoDriver);
    var writestream = gfs.createWriteStream({
        filename: req.files.file.name,
        mode: 'w',
        content_type: req.files.file.mimetype,
        metadata: req.body
    });
    fs.createReadStream(req.files.file.path).pipe(writestream);
    writestream.on('close', function(file) {
        User.findById(req.params.id, function(err, user) {
            // handle error
            user.file = file._id;
            user.save(function(err, updatedUser) {
                // handle error
                return res.json(200, updatedUser)
            })
        });
        fs.unlink(req.files.file.path, function(err) {
            // handle error
            console.log('success!')
        });
    });
    //end
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
