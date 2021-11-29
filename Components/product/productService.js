var express = require("express");
var product = require("../../server/model/Product");
var server= require("../../server");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

exports.ShowList =  (pageNumber, nPerPage) => {
  //tham khảo pagination ở đây : https://docs.mongodb.com/manual/reference/method/cursor.skip/
  return product.find({}).skip(pageNumber > 0 ? (pageNumber - 1) * nPerPage : 0).limit(nPerPage);
};

exports.ShowDataDetail =  (ItemID) => {
 return   product.find({ ProductID: ItemID }).limit(1);
};
exports.getCount= async()=>{
  return await (await product.find()).length;
}
exports.AddProduct = async (req,res) => {
  console.log("server is adding product");
  let currentProductAmount=    ((await product.find()).length) +1;
  let thisProductID="Pro00"+currentProductAmount;
  let thisfilename="";
  console.log("ProductID"+ thisProductID);
  await server.upload(req, res, async (err) => {
    //err
    if (err) {
      console.log("upload error");
      res.render("error", {
        error: err,
      });
//if no err
    } else {
      if (req.file == undefined) {
        console.log("upload error: no file to upload");

        res.render("error", {
          error: "Error: No File Selected!",
        });
      } else {
        thisfilename= res.req.file.filename;
        console.log("upload img succes, file name="+ thisfilename);
        //after upload img, get img link and ypload database
        thisimgurl="/assets/img/product/"+thisfilename;
        let thisProductName=req.body.ProductName;
        let thisProductType= req.body.ProductType;
        let thisPrice= req.body.Price;
        let thisProducer= req.body.Producer;
        const thisDescription= req.body.Description;
        let thisOrigin = req.body.Origin;
        let thisProductStatus = req.body.ProductStatus;
        let thisWarrantyTime = req.body.WarrantyTime;
        let thisMaterial = req.body.Material;
        const today = new Date();
        var thisdate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const p =new product(
          { ProductID: thisProductID, ProductName: thisProductName, ProductType: thisProductType, ProductPrice: thisPrice, Producer: thisProducer, UploadDate: thisdate, Origin: thisOrigin, Description: thisDescription, ProductStatus: thisProductStatus, WarrantyTime: thisWarrantyTime, Material: thisMaterial, ProductImage:  [thisimgurl ], SellerID: "Sell0001" }
        );
        console.log("productID"+thisProductID);
        await  p.save(p);
        return  thisProductID;
      }
    }
  });
  return  thisProductID;

 };

 exports.SaveEdit = async (req,res) => {

  let thisfilename="";
  await server.upload(req, res, async (err) => {
    //err
    if (err) {
      res.render("error", {
        error: err,
      });
//if no err
    } else {
      if (req.file == undefined) {
          console.log("no file selected, it mean user want keep old img");
          //after upload img, get img link and ypload database
          let thisProductName=req.body.ProductName;
          let thisProductType= req.body.ProductType;
          let thisPrice= req.body.Price;
          let thisProducer= req.body.Producer;
          const thisDescription= req.body.Description;
          let thisOrigin = req.body.Origin;
          let thisProductStatus = req.body.ProductStatus;
          let thisWarrantyTime = req.body.WarrantyTime;
          let thisMaterial = req.body.Material;
          const today = new Date();
          var thisdate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
          var thisProductID=req.body.ProductID;
          const p =await product.findOne({ ProductID:thisProductID });
          thisimgurl=p.ProductImage[0];
           p.overwrite(
            { ProductID: thisProductID, ProductName: thisProductName, ProductType: thisProductType, ProductPrice: thisPrice, Producer: thisProducer, UploadDate: thisdate, Origin: thisOrigin, Description: thisDescription, ProductStatus: thisProductStatus, WarrantyTime: thisWarrantyTime, Material: thisMaterial, ProductImage:  [thisimgurl ], SellerID: "Sell0001" }
          );
           p.save().then(async(data) =>{
             console.log(thisProductID);
            return await   thisProductID})
      } else {
        thisfilename= res.req.file.filename;
        console.log("upload img succes, file name="+ thisfilename);
        //after upload img, get img link and ypload database
        thisimgurl="/assets/img/product/"+thisfilename;
        let thisProductName=req.body.ProductName;
        let thisProductType= req.body.ProductType;
        let thisPrice= req.body.Price;
        let thisProducer= req.body.Producer;
        const thisDescription= req.body.Description;
        let thisOrigin = req.body.Origin;
        let thisProductStatus = req.body.ProductStatus;
        let thisWarrantyTime = req.body.WarrantyTime;
        let thisMaterial = req.body.Material;
        const today = new Date();
        var thisdate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var thisProductID=req.body.ProductID;
        const p =await product.findOne({ ProductID:thisProductID });
         p.overwrite(
          { ProductID: thisProductID, ProductName: thisProductName, ProductType: thisProductType, ProductPrice: thisPrice, Producer: thisProducer, UploadDate: thisdate, Origin: thisOrigin, Description: thisDescription, ProductStatus: thisProductStatus, WarrantyTime: thisWarrantyTime, Material: thisMaterial, ProductImage:  [thisimgurl ], SellerID: "Sell0001" }
        );
         p.save().then(async(data) =>{
           console.log(thisProductID);
          return await   thisProductID})
      }
    }
  });
 };

 exports.Lock = async (req,res) => {
   console.log(req.params.ProductID);
  const p = await product.findOne({ ProductID:req.params.ProductID });
   p.ProductStatus="locked";
  await p.save();
 };