var express = require("express");
var router = express.Router();
/* GET users listing. */
router.get("/student-logout", function (req, res) {
  req.session.destroy();
  res.redirect("/test-student-login");
});
module.exports = router;
