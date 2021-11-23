var express = require("express");
var router = express.Router();
var controller= require("./productController");

const itemPerPage=2;
router.get("/product-list", async (req, res)=> {
  await controller.ShowList(req,res);
});
router.get("/product-details-Seller", function (req, res, next) {
  res.render("../Components/product/product-details-Seller");
});
router.get("/product-add", function (req, res, next) {
  res.render("../Components/product/product-add");
});
router.get("/product-edit", function (req, res, next) {
  res.render("../Components/product/product-edit");
});
module.exports = router;
