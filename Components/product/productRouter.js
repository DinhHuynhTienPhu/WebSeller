var express = require("express");
var router = express.Router();
var service=require("./productService");

router.get("/product-list", function (req, res, next) {
  service.find(req,res).then(data=>{res.send(data)})
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
