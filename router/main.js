
module.exports = function(app)
{
	var loginAuth = require('../middleware/loginAuth');
	var bodyParser = require('body-parser');
	var urlencodedParser = bodyParser.urlencoded({ extended: false })

	var userDB = ['admin@minesweepers.co', 'a@b.c'];
	var password = 'sukhadalund1';

   	app.get('/', loginAuth.requireCookies, function(req,res){
        console.log('cookies', req.cookies);
        res.render('index.html');
    });

    app.get('/login', loginAuth.alreadyLoggedIn, function(req,res){
    	console.log('cookies', req.cookies);
        res.render('login.html');
    });

    app.post('/login', urlencodedParser, function(req,res){

        if(  req.body.username && userDB.indexOf(req.body.username) > -1  
        	&& req.body.password && req.body.password === password ) {
        	console.log('give cookies');
        	res.cookie('cookiename', 'cookievalue', { maxAge: 900000, httpOnly: true });
        	res.writeHead(302, {
  				'Location': '/'
			});
			res.end();
        }
        res.status(403);
        res.end('NOT_AUTHORIZED');
    });
}
