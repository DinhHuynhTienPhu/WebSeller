var express = require("express");
var product = require("../../server/model/Product");
exports.ShowSearchingResult = (ItemName, ItemType, Producer, Origin, Price, OrderBy) => {
  let result = product.find({});
  if (ItemName !== "") {
    result = result.find({ ProductName: ItemName });
  }
  if (ItemType !== "0") {
    switch (ItemType) {
      case "1":
        result = result.find({ ProductType: "shoes" });
        break;
      case "2":
        result = result.find({ ProductType: "clothes" });
        break;
      case "3":
        result = result.find({ ProductType: "watch" });
        break;
      default:
        break;
    }
  }
  if (Producer !== "0") {
    switch (Producer) {
      case "1":
        result = result.find({ Producer: "Casio" });
        break;
      case "2":
        result = result.find({ Producer: "Curren" });
        break;
      case "3":
        result = result.find({ Producer: "CoolMate" });
        break;
      default:
        break;
    }
  }
  if (Origin !== "0") {
    switch (Origin) {
      case "1":
        result = result.find({ Origin: "VietNam" });
        break;
      case "2":
        result = result.find({ Origin: "Taiwan" });
        break;
      case "3":
        result = result.find({ Origin: "China" });
        break;
      case "4":
        result = result.find({ Origin: "Japan" });
        break;
      default:
        break;
    }
  }
  if (Price !== "0") {
    switch (Price) {
      case "1":
        result = result.find({ ProductPrice: { $gt: 2000000, $lt: 5000000 } });
        break;
      case "2":
        result = result.find({ ProductPrice: { $gt: 5000000, $lt: 10000000 } });
        break;
      case "3":
        result = result.find({ ProductPrice: { $gt: 10000000, $lt: 20000000 } });
        break;
      default:
        break;
    }
  }
  if (OrderBy !== "0") {
    switch (OrderBy) {
      case "1":
        result = result = result.sort({ ProductPrice: 1 });
        break;
      case "2":
        result = result.sort({ UploadDate: 1 });
        break;
      default:
        break;
    }
  }
  return result;
};
exports.ShowList = (pageNumber, nPerPage, data) => {
  let temp = data.map(({ ProductID }) => ProductID);
  //tham khảo pagination ở đây : https://docs.mongodb.com/manual/reference/method/cursor.skip/
  return product
    .find({ ProductID: { $in: temp } })
    .skip(pageNumber > 0 ? (pageNumber - 1) * nPerPage : 0)
    .limit(nPerPage);
};
