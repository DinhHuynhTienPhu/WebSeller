const express = require("express");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");
const dotenv = require("dotenv");
const multer = require("multer");
const mydb=require("./server/database/connection")
const app = express();

//parsing
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
//router
const productRouter = require("./Components/product/productRouter");
const startRouter = require("./Components/start/startRouter");
const loginRouter = require("./Components/login/loginRouter");
const searchRouter = require("./Components/search/searchRouter");
const orderRouter = require("./Components/order/orderRouter");
const myAccountRouter = require("./Components/myAccount/myAccountRouter");
const otherRouter = require("./Components/other/otherRouter");



//set storage engine
const storage = multer.diskStorage({
  destination: "./public/assets/img/product",
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});

// Init Upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).single("inputProductImage");

//check file type
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
}





dotenv.config({ path: "config.env" });
//app.use(morgan("tiny"));
app.use(express.json());


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

app.post("/product/product-add", (req, res) => {
  upload(req, res, (err) => {
    //err
    if (err) {
      res.render("error", {
        error: err,
      });
//if no err
    } else {
      if (req.file == undefined) {
        res.render("error", {
          error: "Error: No File Selected!",
        });
      } else {
        console.log(req.body);
        return true;
      }
    }
  });
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
(async ()=>{
//connect db here
await mydb();
//
})();
var listener = app.listen(PORT, function () {
  console.log("Listening on port " + listener.address().port);
});

module.exports.upload= upload;