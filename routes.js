/**
 * Created by sathisu on 4/3/2017.
 */
//var first = require('./models/first');

module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route

    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('/', function (req, res) {
        res.sendFile('/portal/index.html',{ root: __dirname }); // load our public/index.html file
    });
};