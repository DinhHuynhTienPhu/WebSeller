var express = require("express");
var router = express.Router();
var controller = require("./searchController");

router.get("/", function (req, res, next) {
  res.render("../Components/search/searching");
});

router.post("/searchingResult", async (req, res) => {
  await controller.ShowSearchingResult(req, res);
});
module.exports = router;
