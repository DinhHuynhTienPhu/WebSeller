const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    AccountID: { type: String, unique: true},
    Username: String,
    Password: String,
    AccountType: String,
    AccountCreateDate: Date,
    Email: String,
    AccountImage: String,
    AccountStatus: String
  });

module.exports = mongoose.model('Account', AccountSchema);