var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/login', function(req,res){
	res.render('login', {title: 'Login'});
});

router.post('/login', function(req, res, next){
	passport.authenticate('local', function(err, user, info){
		//if there's an error, continue middleware
		if(err){
			return next(err);
		}
		//if no user returned
		if(!user){
			return res.redirect('/auth/login');
		}
		//user has successfully authenticated
		req.login(user, function(err){
			if(err){
				return next(err);
			}
			//user has successfully logged in
			return res.redirect('/');
		});
	//calls the authentication process(is this an IIFE?)
	//and passes req, res, next as arguments to what's returned
	//by calling it	
	})(req, res, next);
});

router.get('/logout', function(req, res){
	req.logout();
	res.redirect('/auth/login');
});

module.exports = router;