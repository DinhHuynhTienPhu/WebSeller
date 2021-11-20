const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    OrderID: { type: String, unique: true },
    OrderCreateDate: Date,
    MethodOfPayment: String,
    DeliveryDestination: String,
    CustomerPhone: String,
    CustomerName: String,
    SumPrice: Number,
    OrderStatus: String,
    ShipPrice: Number,
    SellerID: String,
    BuyerID: String,
})

module.exports = mongoose.model('Order', OrderSchema);