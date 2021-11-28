const express = require('express');
const morgan =require('morgan');
const bodyparser = require('body-parser')
const exhbs = require('express-handlebars');
const path = require('path'); 
const dotenv=require('dotenv');


const productRouter = require("./Components/product/productRouter");
const startRouter = require("./Components/start/startRouter");
const loginRouter = require("./Components/login/loginRouter");
const searchRouter = require("./Components/search/searchRouter");
const orderRouter = require("./Components/order/orderRouter");
const myAccountRouter = require("./Components/myAccount/myAccountRouter");
const otherRouter = require("./Components/other/otherRouter");

const app = express();
dotenv.config({path:'config.env'})
app.use(morgan('tiny'));
app.use(bodyparser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, 'public')));


app.engine('handlebars', exhbs());
app.set('view engine', 'hbs');

/*routing*/

app.use("/product", productRouter);
app.use("/start", startRouter);
app.use("/login", loginRouter);
app.use("/search", searchRouter);
app.use("/order", orderRouter);
app.use("/myAccount", myAccountRouter);
app.use("/other", otherRouter);

app.get("/", (rq, res) => {
  res.redirect("/start");
});
app.get("/index", (rq, res) => {
  res.redirect("/start");
});

const PORT=process.env.PORT||8080

app.listen(PORT, ()=>console.log('server is running on local host '+ PORT+' ^_^ '));