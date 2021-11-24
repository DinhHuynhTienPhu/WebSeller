var express = require("express");
var product = require("../../server/model/product");

exports.ShowList =  (pageNumber, nPerPage) => {
  //tham khảo pagination ở đây : https://docs.mongodb.com/manual/reference/method/cursor.skip/
  return  product
    .find({})
    .skip(pageNumber > 0 ? (pageNumber - 1) * nPerPage : 0)
    .limit(nPerPage);
};

exports.ShowDataDetail =  (ItemID) => {
 return   product.find({ ProductID: ItemID }).limit(1);
};
