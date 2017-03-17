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
app.listen(process.env.PORT || 3000);
