const service = require("./productService");
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

exports.ShowList = async (req, res) => {
  let itemPerPage = 2;
  let page = req.query.page;; //mặc định là page 1, nếu như link là http://localhost:3003/product/product-list?page=2 thì là page 2
  if (isNaN(page)) page = 1;
  console.log("page= " + page);
  let data = await service.ShowList(page, itemPerPage)
  console.log("return data " +data);
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
exports.AddProduct = async (req, res) => {
  console.log("adding product.....");
  let productID= await service.AddProduct(req,res);
  await sleep(1000);
   res.redirect("/product/product-details-Seller/"+productID);

  //wait a little bit to mongoose update on server
 

}
exports.ShowDataToEdit = async (req, res) => {
  let ItemID = "Pro0001";
  try {
    ItemID = req.params.ProductID;
  } catch {}
 let productDetail= await service.ShowDataDetail(ItemID)
    res.render("../Components/product/product-edit", {  productDetail: productDetail});
}

exports.SaveEdit = async (req, res) => {
   await service.SaveEdit(req,res);
   await sleep(1000);
       res.redirect("/product/product-details-Seller/"+req.body.ProductID);
}


exports.Lock = async (req, res) => {
  await service.Lock(req,res);
 
   //wait a little bit to mongoose update on server
   await sleep(200);
   res.redirect("/product/product-details-Seller/"+req.params.ProductID);
 }