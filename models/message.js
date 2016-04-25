var Message  = function(fromId, title, message){
	this.fromId = fromId;
	this.title = title;
	this.message = message;
	this.read = false;
	this.createdAt = Date.now();
};
module.exports = Message;