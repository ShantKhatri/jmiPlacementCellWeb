var express = require("express");
var router = express.Router();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(__dirname + "/public"));
// app.set("view engine", "ejs");

/* GET users listing. */
// router.get("/recruiter-dashboard", function (req, res, next) {
router.get("/placement-states-2021", function (req, res, next) {
  res.render("placement-states-2021");
});
module.exports = router;
