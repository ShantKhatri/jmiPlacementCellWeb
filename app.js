var indexRouter = require("./routes/index-route");
var contactRouter = require("./routes/contact-route");

var placementStates2021 = require("./routes/placement-states-2021-route");
var placementStates2022 = require("./routes/placement-states-2022-route");
var placementStates2023 = require("./routes/placement-states-2023-route");

var recruiterRegistrationRouter = require("./routes/recruiter-registration-route");
var recruiterLoginRouter = require("./routes/recruiter-login-route");
var recruiterDashboardRouter = require("./routes/recruiter-dashboard-route");
var recruiterLogoutRouter = require("./routes/recruiter-logout-route");
var addjobRoute = require("./routes/add-job-route");
var applicationsRouter = require("./routes/applications-route");

var studentRegistrationRouter = require("./routes/test-student-registration-route");
var studentDashboardRouter = require("./routes/test-student-dashboard-route");
var studentLoginRouter = require("./routes/test-student-login-route");

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
var session = require("express-session");
const cookieParser = require("cookie-parser");

const port = 3000;

const app = express();
let InputData = {};

app.use(cookieParser());

app.use(
  session({
    secret: "123456cat",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/stylesheets", express.static(__dirname + "/public/stylesheets"));
app.use("/css", express.static(__dirname + "/public/vendor/bootstrap/css"));
app.use("/images", express.static(__dirname + "/public/images"));

app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/", contactRouter);

app.use("/", placementStates2021);
app.use("/", placementStates2022);
app.use("/", placementStates2023);

app.use("/", recruiterRegistrationRouter);
app.use("/", recruiterLoginRouter);
app.use("/", recruiterDashboardRouter);
app.use("/", recruiterLogoutRouter);
app.use("/", addjobRoute);
app.use("/", applicationsRouter);

app.use("/", studentRegistrationRouter);
app.use("/", studentDashboardRouter);
app.use("/", studentLoginRouter);

app.listen(port, () => {
  console.log("app running at port " + port);
});
