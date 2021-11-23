const service=require('./productService')
exports.ShowList= async (req,res)=>{
    let itemPerPage=2;
    let page=1; //mặc định là page 1, nếu như link là http://localhost:3003/product/product-list?page=2 thì là page 2
    try{     page=req.query.page;
        
    }catch{} 
    console.log("page= "+page)
     service.ShowList(page,itemPerPage).then(data=>{
        res.render("../Components/product/product-list",{data:data})
    })
}