var mongoose = require('mongoose');

var CitySchema = mongoose.Schema({
	city:String,
	state: String,
	country: String
});


var UserSchema = mongoose.Schema({
	role: {type: String, enum : [ 'helper', 'mover' ], default: 'mover'},
	first_name: {type: String, required:true},
	last_name: {type: String, required: true},
	email: {type: String, required: true, unique: true},
	born_on: Date,
	origin:CitySchema,
	location: CitySchema,
	language: String,
	religion: {type: String, default:'Private'},
	marital_status: {type: String, enum : [ 'single', 'married', 'divorced' ], default: 'single'},
	profile: {
		title: {type: String, default: 'No Title'},
		body: {type: String, default: 'This user hasn\'t added information yet'},
	},
	help:
		{tax:{type:Boolean, default: false},
		policies:{type:Boolean, default: false},
		dl:{type:Boolean, default: false},
		transportation:{type:Boolean, default: false},
		living:{type:Boolean, default: false},
		healthInsurance:{type:Boolean, default: false}
	},
	passwordDigest:String,
	messages: Array
});

var User = mongoose.model('User', UserSchema);
module.exports = User;