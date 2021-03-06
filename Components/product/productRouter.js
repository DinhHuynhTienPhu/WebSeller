var express = require("express");
var router = express.Router();
var controller = require("./productController");

router.get("/start",function (req, res) {res.redirect("/start")});


router.get("/product-list",  controller.ShowList);
router.get("/product-details-Seller/:ProductID", async (req, res) => {
  await controller.ShowDataDetail(req, res);
});
router.post("/product-add", controller.AddProduct);
router.get("/product-add", function (req, res, next) {
  res.render("../Components/product/product-add");
});


router.get("/product-edit/:ProductID", controller.ShowDataToEdit);
router.post("/product-edit/", controller.SaveEdit);


router.get("/product-edit/lock/:ProductID", controller.Lock);

module.exports = router;
