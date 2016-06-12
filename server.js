var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

app.use(cookieParser());
require('./router/main')(app);
app.set('views', __dirname + '/views');
app.use('/static', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 8080)

app.engine('html', require('ejs').renderFile);
var port = app.get('port');
var server = app.listen(port, function() {
    console.log("We have started our server on port " + port);
});
