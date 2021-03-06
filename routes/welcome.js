var express = require('express');
var router = express.Router();
var welcomeController = require('../controllers/welcome_controller');
var userController = require('../controllers/user_controller');
var sessionController = require('../controllers/session_controller');


router.route('/dashboard')
	.get(userController.index)
	.post(userController.create);


router.route('/')
	.get(welcomeController.index);

router.route('/signup')
	.get(welcomeController.signup);

module.exports = router;