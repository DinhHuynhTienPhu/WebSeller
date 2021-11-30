const service = require("./searchService");

let data;
exports.ShowSearchingResult = async (req, res) => {
  let ItemName;
  let ItemType;
  let Producer;
  let Origin;
  let Price;
  let OrderBy;
  try {
    ItemName = req.body.ProductName;
    console.log(ItemName);
  } catch {
    console.log("Can't  get productName");
  }
  try {
    ItemType = req.body.ProductType;
  } catch {
    console.log("Can't  get productType");
  }
  try {
    Producer = req.body.Producer;
  } catch {
    console.log("Can't  get Producer");
  }
  try {
    Origin = req.body.Origin;
  } catch {
    console.log("Can't  get Origin");
  }
  try {
    Price = req.body.Price;
  } catch {
    console.log("Can't  get Price");
  }
  try {
    OrderBy = req.body.OrderBy;
  } catch {
    console.log("Can't  get Order By");
  }
  data = await service.ShowSearchingResult(ItemName, ItemType, Producer, Origin, Price, OrderBy);
  // res.render("../Components/search/searching", { dataRender: data });
  //after get full result, now paginating
  let itemPerPage = 2;
  let { page } = req.query; //mặc định là page 1, nếu như link là http://localhost:3003/product/product-list?page=2 thì là page 2
  if (isNaN(page)) page = 1;
  let dataPage = await service.ShowList(page, itemPerPage, data);
  res.render("../Components/search/searching", { dataRender: dataPage });
};

exports.ShowList = async (req, res) => {
  let itemPerPage = 2;
  let { page } = req.query; //mặc định là page 1, nếu như link là http://localhost:3003/product/product-list?page=2 thì là page 2
  if (isNaN(page)) page = 1;
  let dataPage = await service.ShowList(page, itemPerPage, data);
  res.render("../Components/search/searching", { dataRender: dataPage });
};
