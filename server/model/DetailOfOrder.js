const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DetailOfOrderSchema = new Schema({
    OrderID:  { type: String, unique: true },
    ProductID:  { type: String, unique: true },
    SellerID:  { type: String, unique: true },
    Quantity: Number,
    UnitPrice: Number,
})

  module.exports = mongoose.model('DetailOfOrder', DetailOfOrderSchema);