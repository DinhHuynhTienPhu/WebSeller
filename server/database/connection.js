const mongoose = require('mongoose');
const dotenv=require('dotenv');
dotenv.config({path:'config.env'})
const mongodbURL=process.env.mongodbURL
const MongoClient = require('mongodb').MongoClient;
const url =process.env.mongodbURL
const mongo = new MongoClient(url, { useNewUrlParser: true });
const ProducList = {}   // Bien luu giu ket qua cua truy van
var mydb;


exports.connectDB=()=>{
mongo.connect((err, db) => {
    if (err) throw err;
    console.log("Kết nối thành công");
    mydb=db;
});
}
exports.mydb =mydb