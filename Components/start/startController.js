const service = require("./startService");


exports.ShowList = async (req, res) => {
  let itemPerPage = 6;
  let page = req.query.page;; //mặc định là page 1, nếu như link là http://localhost:3003/product/product-list?page=2 thì là page 2
  if (isNaN(page)) page = 1;
  console.log("page= " + page);
  let data = await service.ShowList(page, itemPerPage)
  console.log("return data " +data);
  res.render("../Components/start/index", {
    data: data
  });
}
