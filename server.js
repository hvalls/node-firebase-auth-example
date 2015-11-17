var express = require('express'),
app = express();

var userService = require('./user_service');

//Create new user
app.post('/user', function(req, res) {

	var newUserEmail = req.headers['user-email'];
	var newUserPass = req.headers['user-pass'];

	userService.addUser(newUserEmail, newUserPass, 
		
		function(error, uid) {
		
			if (error) {
				return res.status(500).send('Error when creating user');
			
			} else {			
				return res.status(201).send({uid : uid});
		}
	});
});

//Perform authentication
app.post('/login', function(req, res){

	var userEmail = req.headers['user-email'];
	var userPassword = req.headers['user-pass'];

	userService.authenticate(userEmail, userPassword,

		function(error, authData) {

			if (error) {
				return res.status(401).send('Unauthorized');
			
			} else {
				return res.status(200).send(authData);
		}

	});
});

app.listen(process.env.PORT || 3000, function(){
	console.log('Server started...');
});