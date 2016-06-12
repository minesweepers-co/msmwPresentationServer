'use strict';

module.exports = {
    requireCookies: function(req, res, next) {
        if (!req.cookies.cookiename) {
            res.writeHead(302, {
                'Location': 'login'
            });
            res.end();
            return;
        }
        next();
    },
    alreadyLoggedIn: function(req, res, next) {
        if (req.cookies.cookiename) {
            res.writeHead(302, {
                'Location': '/'
            });
            res.end();
            return;
        }
        next();
    }
};
