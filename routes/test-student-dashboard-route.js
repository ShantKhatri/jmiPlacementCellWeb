var express = require("express");
var router = express.Router();
var db = require("../database");

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(__dirname + "/public"));
// app.set("view engine", "ejs");

/* GET users listing. */
// router.get("/recruiter-dashboard", function (req, res, next) {
router.get("/test-student-dashboard", function (req, res, next) {
  if (req.session.loggedinUser) {
    const data = req.session.studentsData;
    var sql = `SELECT * FROM allJobs WHERE MinSPI <=${data.spi}`;
    db.query(sql, [req.session.emailAddress], function (err, jobdata, fields) {
  
      if (err) throw err;
      var jobData = jobdata;
      res.render("test-student-dashboard", { email: req.session.emailAddress , data: data , jobData: jobData });
      console.log(jobData);
    });
    console.log(data);
  } else {
    res.redirect("/test-student-login");
  }
});
module.exports = router;
