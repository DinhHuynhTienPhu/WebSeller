var express = require("express");
var product = require("../../server/model/product");

exports.ShowList = async (pageNumber, nPerPage) => {
  //tham khảo pagination ở đây : https://docs.mongodb.com/manual/reference/method/cursor.skip/
  const data = await product
    .find({})
    .skip(pageNumber > 0 ? (pageNumber - 1) * nPerPage : 0)
    .limit(nPerPage);

  try {
    return data;
  } catch (error) {
    console.log(error);
  }
};

exports.ShowDataDetail = async (ItemID) => {
  const result = await product.find({ ProductID: ItemID }).limit(1);

  try {
    return result;
  } catch (error) {
    console.log(error);
  }
};
