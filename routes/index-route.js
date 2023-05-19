var express = require("express");
var router = express.Router();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(__dirname + "/public"));
// app.set("view engine", "ejs");

/* GET users listing. */
// router.get("/recruiter-dashboard", function (req, res, next) {
router.get("/index", function (req, res, next) {
  res.render("index");
});
module.exports = router;
