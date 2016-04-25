var session = {};
session.id = null;
session.loginTime = null;
session.login = function(loginId){
	this.id = loginId;
	this.loginTime =  Date.now();
	return true;
};
session.logout = function(){
	this.id = null;
	this.loginTime = null;
	return true;
};
session.loggedIn = function(){
	return this.id;
};
session.time = function(){
	return this.loginTime;
};
module.exports = session;