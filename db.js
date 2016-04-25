var mongoose = require('mongoose');
var mongooseURL = process.env.MONGO_URL || 'mongodb://localhost/welcome_app';
mongoose.connect(mongooseURL);

module.exports = mongoose;
