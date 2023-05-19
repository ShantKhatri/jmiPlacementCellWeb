var express = require("express");
var router = express.Router();
var db = require("../database");

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(__dirname + "/public"));
// app.set("view engine", "ejs");

/* GET users listing. */
// router.get("/recruiter-dashboard", function (req, res, next) {
router.get("/test-recruiter-dashboard", function (req, res, next) {
  if (req.session.loggedinUser) {
    const data = req.session.recruiterData;
    var sql = "SELECT * FROM allJobs WHERE companyEmail =?";
    db.query(sql, [req.session.emailAddress], function (err, jobdata, fields) {
  
      if (err) throw err;
      var jobData = jobdata;
      res.render("test-recruiter-dashboard", { email: req.session.emailAddress , data: data , jobData: jobData });
      console.log(jobData);
    });
    console.log(data);
    console.log(data.name);
  } else {
    res.redirect("/recruiter-login");
  }

});

router.post("/test-recruiter-dashboard", function (req, res) {
  console.log(req.body);
  req.session.jobID = req.body.jobID;
  res.redirect("/applications");
});
module.exports = router;
