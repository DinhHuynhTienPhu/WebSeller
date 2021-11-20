const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BuyerSchema = new Schema({
    BuyerID: { type: String, unique: true },
    AccountID: String,
    BuyerName: String,
    BuyerAddress: String,
    BuyerPhone: String,
    BuyerBirthday: Date
})

  module.exports = mongoose.model('Buyer', BuyerSchema);