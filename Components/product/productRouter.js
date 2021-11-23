var express = require("express");
var router = express.Router();
var controller = require("./productController");

const itemPerPage = 2;
router.get("/product-list", async (req, res) => {
  await controller.ShowList(req, res);
});
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
