const service = require("./productService");
exports.ShowList = async (req, res) => {
  let itemPerPage = 2;
  let page = req.query.page;; //mặc định là page 1, nếu như link là http://localhost:3003/product/product-list?page=2 thì là page 2
  if (isNaN(page)) page = 1;
  console.log("page= " + page);
  let data = await service.ShowList(page, itemPerPage)
  res.render("../Components/product/product-list", {
    data: data
  });
}


exports.ShowDataDetail = async (req, res) => {
  let ItemID = "Pro0001";
  try {
    ItemID = req.params.ProductID;
  } catch {}
 let productDetail= await service.ShowDataDetail(ItemID)
    res.render("../Components/product/product-details-Seller", {  productDetail: productDetail});
}
  
