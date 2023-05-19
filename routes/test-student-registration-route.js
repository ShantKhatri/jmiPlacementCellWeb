var express = require("express");
const bodyParser = require("body-parser");
var router = express.Router();
var db = require("../database");

// to display registration form
router.get("/test-student-registration", function (req, res, next) {
  res.render("test-student-registration");
});

// to store user input detail on post request
router.post("/test-student-registration", function (req, res, next) {
  inputData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    studentID: req.body.studentID,
    rollNo: req.body.rollNo,
    mobileNo: req.body.mobileNo,
    spi: req.body.spi,
    email_address: req.body.email_address,
    password: req.body.password,
    address1: req.body.address1,
    address2: req.body.address2,
    course: req.body.course,
  };
  console.log(req.body);
  // check unique email address
  var sql = "SELECT * FROM students WHERE email_address =?";
  db.query(sql, [inputData.email_address], function (err, data, fields) {
    if (err) throw err;
    if (data.length >= 1) {
      var msg = inputData.email_address + " was already exist";
      res.render("test-student-registration", { alertMsg: msg });
    } else if (req.body.confirm_password != inputData.password) {
      var msg = "Password & Confirm Password is not Matched";
      res.render("test-student-registration", { alertMsg: msg });
    } else {
      // save users data into database
      var sql = "INSERT INTO students SET ?";
      db.query(sql, inputData, function (err, data) {
        if (err) throw err;
      });
      var msg = "Your are successfully registered";
      res.redirect("/test-student-login");
    }
  });
});
module.exports = router;
