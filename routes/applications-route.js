var express = require("express");
var router = express.Router();
var db = require("../database");

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(__dirname + "/public"));
// app.set("view engine", "ejs");

/* GET users listing. */
// router.get("/recruiter-dashboard", function (req, res, next) {
// router.get("/applications", function (req, res, next) {
//   console.log(req.body);
//   res.render("applications");
// });
router.get("/applications", function (req, res, next) {
    const data = req.session.jobID;
    var sql = `SELECT * FROM applicants WHERE JobID ='${data}'`;
    db.query(sql, [req.session.emailAddress], function (err, ApplicantsData, fields) {
  
      if (err) throw err;
      var ApplicantsData = ApplicantsData;
      res.render("applications", { email: req.session.emailAddress , data: data , ApplicantsData: ApplicantsData });
      console.log(ApplicantsData);
    });
    console.log(data);
});
module.exports = router;
