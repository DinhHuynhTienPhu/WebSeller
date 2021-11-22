const express = require("express");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");
const dotenv = require("dotenv");

const app = express();
//router
const productRouter = require("./Components/product/productRouter");
const startRouter = require("./Components/start/startRouter");
const loginRouter = require("./Components/login/loginRouter");
const searchRouter = require("./Components/search/searchRouter");
const orderRouter = require("./Components/order/orderRouter");
const myAccountRouter = require("./Components/myAccount/myAccountRouter");
const otherRouter = require("./Components/other/otherRouter");

dotenv.config({ path: "config.env" });
app.use(morgan("tiny"));
app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("public"));
app.use(express.static(path.join(__dirname + "/../public")));

app.set("view engine", "hbs");
app.set("view options", { layout: "layout" });
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
//catch 404 error
app.use(function (req, res, next) {
  var err = new Error();
  err.status = 404;
  next(err);
});



//handle 404 error
app.use(function (err, req, res, next) {
  res.render("404.hbs"), { url: req.url };
});

//create port
const PORT = process.env.PORT || 8080;

var listener = app.listen(PORT, function () {
  console.log("Listening on port " + listener.address().port);
});
