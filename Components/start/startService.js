var express = require("express");
var product = require("../../server/model/Product");
var server= require("../../server");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

exports.ShowList =  (pageNumber, nPerPage) => {
  //tham khảo pagination ở đây : https://docs.mongodb.com/manual/reference/method/cursor.skip/
  return product.find({}).skip(pageNumber > 0 ? (pageNumber - 1) * nPerPage : 0).limit(nPerPage).sort({ UploadDate: 1 });
};