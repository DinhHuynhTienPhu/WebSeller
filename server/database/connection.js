const mongoose = require('mongoose');
const dotenv=require('dotenv');
dotenv.config({path:'config.env'})
const mongodbURL=process.env.mongodbURL
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