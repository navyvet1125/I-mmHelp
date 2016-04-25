var db = require('./db');
var User = require('./models/user');
var Message = require('./models/message');
var bcrypt = require('bcrypt-nodejs');


User.remove({}, function(){

  User.create([
    {
    	role:'helper',
    	first_name:'Evan',
    	last_name:'Washington',
    	email: 'enavy04@gmail.com',
    	born_on: new Date('03/30/1982'),
    	origin: {
    		city:'Los Angeles',
    		state: 'California'
    	},
    	location: {
    		city:'Santa Monica',
    		state: 'California'
    	},
    	language:'English',
    	religion: 'Private',
    	marital_status:'divorced',
    	profile: {
    		title:'Welcome to America!!!',
    		body:'I hope I can help!!!'
    	},
    	passwordDigest: bcrypt.hashSync("bacon")

    },
    {
    	role:'mover',
    	first_name:'Niralee',
    	last_name:'Patni',
    	email: 'NiniPat@gmail.com',
    	born_on: new Date('01/20/1979'),
    	origin: {
    		city:'Bombay',
    		country: 'India'
    	},
    	location: {
    		city:'Santa Monica',
    		state: 'California'
    	},
    	language:'Malayalam',
    	religion: 'Private',
    	marital_status:'single',
    	profile: {
    		title:'Moving to America',
    		body:'I\'m so excited!!!'
    	},
    	help: {tax:true, dl:true},
    	passwordDigest: bcrypt.hashSync("salad")

    },

  ], function(err, users){
    if (err) console.log(err);
    console.log('seeded ' + users.length + ' users');
    var newMessage =new Message(users[0].id, 'Hello', 'How are you?');
    users[1].messages.push(newMessage);
    users[1].save( function(){
    console.log(users[1]);
	    console.log('Password: veggies',bcrypt.compareSync("veggies", users[1].passwordDigest));
	    console.log('Password: salad',bcrypt.compareSync("salad", users[1].passwordDigest));
	    process.exit();
    });
  });

});