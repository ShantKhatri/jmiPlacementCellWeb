var express = require("express");
const bodyParser = require("body-parser");
var router = express.Router();
var db = require("../database");

// to display registration form
router.get("/recruiter-signup", function (req, res, next) {
  res.render("recruiter-signup");
});

// to store user input detail on post request
router.post("/recruiter-signup", function (req, res, next) {
  inputData = {
    name: req.body.name,
    industry_type: req.body.industry_type,
    email_address: req.body.email_address,
    password: req.body.password,
  };
  // check unique email address
  var sql = "SELECT * FROM companies WHERE email_address =?";
  db.query(sql, [inputData.email_address], function (err, data, fields) {
    if (err) throw err;
    if (data.length >= 1) {
      var msg = inputData.email_address + " was already exist";
      res.render("recruiter-signup", { alertMsg: msg });
    } else if (req.body.confirm_password != inputData.password) {
      var msg = "Password & Confirm Password is not Matched";
      res.render("recruiter-signup", { alertMsg: msg });
    } else {
      // save users data into database
      var sql = "INSERT INTO companies SET ?";
      db.query(sql, inputData, function (err, data) {
        if (err) throw err;
      });
      var msg = "Your are successfully registered";
      res.redirect("/recruiter-login");
    }
  });
  console.log(req.body);
});
module.exports = router;
