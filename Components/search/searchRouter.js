var express = require("express");
var router = express.Router();
var controller = require("./searchController");

router.get("/", function (req, res, next) {
  res.render("../Components/search/searching");
});
router.get("/searchingResult", controller.ShowList);
router.post("/searchingResult", controller.ShowSearchingResult);
module.exports = router;
