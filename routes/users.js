var express = require('express');
var router = express.Router();
const usersController  = require("../controllers/usersController");
/* GET users listing. */

router.post('/registro', usersController.create);
router.post('/login', usersController.login);

module.exports = router;
