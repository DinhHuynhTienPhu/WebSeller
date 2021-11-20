var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("../Components/myAccount/my-account");
});

module.exports = router;
