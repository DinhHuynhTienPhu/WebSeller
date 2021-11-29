const service = require("./searchService");
exports.ShowListByName = async (req, res) => {
  let ItemName = "CoolMate jacket";
  try {
    ItemName = req.body.ProductName;
    console.log(ItemName);
  } catch {
    console.log("Can't  get productName");
  }
  let data = await service.ShowListByName(ItemName);
  res.render("../Components/search/searching", {
    data: data,
  });
};

exports.ShowSearchingResult = async (req, res) => {
  let ItemName;
  let ItemType;
  let Producer;
  let Origin;
  let Price;
  let OrderBy;
  console.log(req.body);
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
  let data = await service.ShowSearchingResult(ItemName, ItemType, Producer, Origin, Price, OrderBy);
  res.render("../Components/search/searching", {
    data: data,
  });
};
