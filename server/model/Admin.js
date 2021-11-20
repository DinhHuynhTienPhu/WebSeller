const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    AdminID: { type: String, unique: true },
    AccountID: String,
    AdminName: String,
    AdminPhone: String,
})

  module.exports = mongoose.model('Admin', AdminSchema);