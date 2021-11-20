const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    SellerID: { type: String, unique: true },
    ProductID:  { type: String, unique: true },
    NumberID:  { type: Number, unique: true },
    CommentCreateDate: Date,
    AccountID: String,
    Content: String
})

  module.exports = mongoose.model('Comment', CommentSchema);