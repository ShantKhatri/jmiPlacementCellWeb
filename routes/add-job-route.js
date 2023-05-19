var express = require("express");
var router = express.Router();
var db = require("../database");

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(__dirname + "/public"));
// app.set("view engine", "ejs");

/* GET users listing. */
// router.get("/recruiter-dashboard", function (req, res, next) {
router.get("/add-job", function (req, res, next) {
  res.render("add-job");
});

router.post("/add-job", function (req, res, next) {
  inputData = {
    JobID: req.body.JobID,
    JobTitle: req.body.JobTitle,
    companyName: req.body.companyName,
    MinSPI: req.body.MinSPI,
    EstLPA: req.body.EstLPA,
    Location: req.body.Location,
    JobType: req.body.JobType,
    NoApplications: req.body.NoApplications,
    Course: req.body.Course,
    Description: req.body.Description,
    status: req.body.status,
    companyEmail: req.body.companyEmail
  };
  // check unique email address
  var sql = "SELECT * FROM allJobs WHERE companyEmail =?";
  db.query(sql, [inputData.JobID], function (err, data, fields) {
    if (err) throw err;
    if (data.length >= 1) {
      let msg = inputData.JobID + " was already exist";
      alert(msg);
    } else {
      // save users data into database
      var sql = "INSERT INTO allJobs SET ?";
      db.query(sql, inputData, function (err, data) {
        if (err) throw err;
      });
      var msg = "Your are successfully Added Job!";
      // res.redirect("/add-job");
    }
    res.render("add-job", { alertMsg: msg });
  });
  console.log(req.body);
});

module.exports = router;
