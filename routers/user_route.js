const router = require('express').Router();
const userController = require('./../controller/user_controller');

// we wrote our route function in controller can say indirectly
router.post('/register', userController);

module.exports = router;