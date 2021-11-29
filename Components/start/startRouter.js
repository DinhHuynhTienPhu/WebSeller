var express = require('express');
var router = express.Router();
var controller= require('./startController')

router.get('/', controller.ShowList);

module.exports = router;
