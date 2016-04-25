 var welcome = {};
welcome.index = function(req, res){
  res.send('Hello and welcome');
};
module.exports = welcome;