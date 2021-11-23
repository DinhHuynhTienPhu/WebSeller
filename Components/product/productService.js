var product=require('../../server/model/Product')
var mydb=require('../../server/database/connection')
exports.find=(req,res) => {
    const dbo = mydb.db("QLBH"); // Ten database trên mongoDB Atlas muon truy van
        //Lấy toan bo dữ liệu trong bảng Products 
        dbo.collection("products").find().toArray((err , ProducList)=>{
            if(err) throw err;
    
            if(ProducList.length != 0) console.log("Lấy dữ liệu thành công ..... ");
            console.log("here is data: ");
            console.log(ProducList);
            db.close();
        });
}