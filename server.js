var requirejs = require('requirejs');

requirejs.config({
    nodeRequire: require
});

var http = require('http'),
    express = require('express'),
    serveStatic = require('serve-static')



 
// configure the app
var app = express();

//handle postdata
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
 
//host static files.
app.use(serveStatic('static/'));
app.use("/lib/", serveStatic('node_modules/angular/'));
app.use("/lib/", serveStatic('node_modules/requirejs/'));
app.use("/", serveStatic('src'));




//host the server
app.set('port', 9424);
var server = http.createServer(app);
server.listen(app.get('port'), function (){});
console.log('Server running at ????:'+9424);
