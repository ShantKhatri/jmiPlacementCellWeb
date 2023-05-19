var express = require("express");
var router = express.Router();
var db = require("../database");
/* GET users listing. */
router.get("/test-student-login", function (req, res, next) {
  res.render("test-student-login");
});

router.post("/test-student-login", function (req, res) {
  var emailAddress = req.body.email_address;
  var password = req.body.password;
  var sql = "SELECT * FROM students WHERE email_address =? AND password =?";
  db.query(sql, [emailAddress, password], function (err, data, fields) {
    if (err) throw err;
    if (data.length > 0) {
      req.session.loggedinUser = true;
      req.session.emailAddress = emailAddress;
      req.session.studentsData = data[0];
      res.redirect("/test-student-dashboard");
    } else {
      res.render("test-student-login", {
        alertMsg: "Your Email Address or password is wrong",
      });
    }
    console.log(req.body);
    console.log(data);
  });
});
module.exports = router;
