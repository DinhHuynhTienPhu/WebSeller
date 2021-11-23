const mongoose = require('mongoose');
const dotenv= require('dotenv');
const mongodbURL= " mongodb+srv://admin:admin123@cluster0.fd2b7.mongodb.net/QLBH?retryWrites=true&w=majority"

const connectDB=async()=>{
try{
    const con = await  mongoose.connect(mongodbURL,{
        useNewUrlParser : true,

    })
    console.log("mongodb connected"+con.connection.host)
}
catch(e){console.log(e);}

}
module.exports =connectDB