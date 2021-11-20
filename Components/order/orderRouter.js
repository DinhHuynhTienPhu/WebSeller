var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("../Components/order/order-list");
});

module.exports = router;
