var express = require("express");
var router = express.Router();
/* GET users listing. */
router.get("/recruiter-logout", function (req, res) {
  req.session.destroy();
  res.redirect("/recruiter-login");
});
module.exports = router;
