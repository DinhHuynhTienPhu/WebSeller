var express = require("express");
var router = express.Router();
var product=require('../../server/model/product')
router.get("/product-list", async (req, res)=> {
  console.log("querying");
  const data = await product.find({});

  try {
    res.render('../Components/product/product-list',{data});
    console.log(data);
  } catch (error) {
    response.status(500).send(error);
  }
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
