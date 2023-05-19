var express = require("express");
var router = express.Router();
var db = require("../database");
/* GET users listing. */
router.get("/recruiter-login", function (req, res, next) {
  res.render("recruiter-login");
});

router.post("/recruiter-login", function (req, res) {
  var emailAddress = req.body.email_address;
  var password = req.body.password;
  var sql = "SELECT * FROM companies WHERE email_address =? AND password =?";
  db.query(sql, [emailAddress, password], function (err, data, fields) {
    if (err) throw err;
    if (data.length > 0) {
      req.session.loggedinUser = true;
      req.session.emailAddress = emailAddress;
      req.session.recruiterData = data[0];
      res.redirect("/test-recruiter-dashboard");
    } else {
      res.render("recruiter-login", {
        alertMsg: "Your Email Address or password is wrong",
      });
    }
    console.log(req.body);
  });
});
module.exports = router;
