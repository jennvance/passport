var User = require('../models/user');

//seed a user
var user = new User({
	username: 'chris',
	email: 'chris@example.com',
	password: 'test'
});
//call the save method and pass in callback
user.save(function(err,user){
	//if there's an error, console.log the error
	if(err){
		console.log(err);
	} else {
		console.log('Seeded user');
	}
});