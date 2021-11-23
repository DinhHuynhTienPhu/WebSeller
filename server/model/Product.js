const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    ProductID: { type: String, unique: true},
    SellerID:  { type: String, unique: true },
    ProductName: String,
    ProductType: String,
    ProductPrice: Number,
    Producer: String,
    UploadDate: Date,
    Origin: String,
    Description: String,
    ProductStatus: String,
    WarrantyTime: String,
    Material: [String],
    ProductImage: [String]
  });

module.exports = mongoose.model('Products', ProductSchema);