var User = require('../models/user');
var login = require('../models/session');
var bcrypt = require('bcrypt-nodejs');

var user ={};
user.index = function(req,res){
	if(login.loggedIn()){
		User.findOne({_id: login.loggedIn()}, function(err,user){
			var searchRole;
			if (user.role==='mover') searchRole='helper';
			else searchRole='mover';
			User.find({role:searchRole}, function(err,users){
				var message ='';
				users.forEach(function(user){
					message += user.id+'<br/>';
					User.findOne({_id: login.loggedIn()}, function(err,user){
						if (err){
							throw err;
						}
						else{
							message+=user.first_name;
							res.send(message);
						}
					});
				});
			});

		});
	}
};
user.create = function(req,res){
	var password;
	if(req.body.password ===req.body.password_confirmation)password = req.body.password;
	User.create({
    	role:req.body.role,
    	first_name:req.body.first_name,
    	last_name:req.body.last_name,
    	email: req.body.email,
    	born_on: new Date(req.body.born_on),
    	origin: {
    		city:req.body.origin_city,
    		state:req.body.origin_state,
    		country: req.body.origin_country
    	},
    	location: {
    		city:req.body.current_city,
    		state:req.body.current_state,
    		country: req.body.current_country
    	},
    	language:req.body.language,
    	religion: req.body.religion,
    	marital_status:req.body.marital_status,
    	passwordDigest: bcrypt.hashSync(password)
    }, function(err, users){
			login.login(users[0].id);
			res.redirect('/dashboard');
    	}

    	);
};
user.new = function(req,res){};
user.show = function(req,res){
	User.findOne({email:req.params.email}, function(err,user){
		if (err){
			throw err;
		}
		else{
			message += user.email+'<br/>';
			message += user.first_name+'<br/>';
			res.send(message);
		}
	});
};

user.edit = function(req,res){};
user.update = function(req,res){};
user.destroy = function(req,res){};
user.login= function(req,res){
	User.findOne({email:req.params.email}, function(err,user){
		if (err){
			throw err;
		}
		else{
			if(bcrypt.compareSync(req.body.password, user.passwordDigest)){
				login.login(user.id);
				res.redirect('/dashboard');
			}
		}
	});
};
user.logout= function(req,res){
	login.logout();
	res.redirect('/');
};
user.signup = function(req,res){};

module.exports = user;