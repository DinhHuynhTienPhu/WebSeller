var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('../Components/login/login');
});

router.get('/forget-password', function(req, res, next) {
    res.render('../Components/login/forget_password');
  });

  router.get('/register', function(req, res, next) {
    res.render('../Components/login/register');
  });
module.exports = router;
