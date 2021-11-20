var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('../Components/other/contact');
});
router.get('/contact', function(req, res, next) {
    res.render('../Components/other/contact');
  });

  router.get('/about-us', function(req, res, next) {
    res.render('../Components/other/about_us');
  });
module.exports = router;
