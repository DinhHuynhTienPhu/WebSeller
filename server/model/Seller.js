const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SellerSchema = new Schema({
    SellerID: { type: String, unique: true },
    AccountID: String,
    SellerName: String,
    SellerAddress: String,
    SellerPhone: String,
})

module.exports = mongoose.model('Seller', SellerSchema);