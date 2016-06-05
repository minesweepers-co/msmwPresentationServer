var express    =    require('express');
var app        =    express();

require('./router/main')(app);
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 8080)

app.engine('html', require('ejs').renderFile);
var port = app.get('port');
var server = app.listen(port, function() {
    console.log("We have started our server on port " + port);
});
