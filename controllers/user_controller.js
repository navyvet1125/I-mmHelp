var User = require('../models/user');
var login = require('../models/session');
var bcrypt = require('bcrypt-nodejs');

var user ={};
user.index = function(req,res){
	User.find({role:'mover'}, function(err,users){
		var message ='';
		users.forEach(function(user){
			login.login(user.id);

			message += user.id+'<br/>'
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
    }, function(err, answers){

    	}

    	);
};
user.new = function(req,res){};
user.show = function(req,res){
	User.findOne({email:req.params.email}, function(err,user){
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

};
user.edit = function(req,res){};
user.update = function(req,res){};
user.destroy = function(req,res){};
user.login= function(req,res){};
user.logout= function(req,res){};
user.signup = function(req,res){};
module.exports = user;