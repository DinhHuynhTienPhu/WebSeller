var express = require("express");
var router = express.Router();
var controller = require("./productController");

router.get("/product-list",  controller.ShowList);
router.get("/product-details-Seller/:ProductID", async (req, res) => {
  await controller.ShowDataDetail(req, res);
});
router.get("/product-add", function (req, res, next) {
  res.render("../Components/product/product-add");
});
router.get("/product-edit", function (req, res, next) {
  res.render("../Components/product/product-edit");
});
module.exports = router;
