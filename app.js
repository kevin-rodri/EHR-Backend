require("dotenv").config();
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const assessmentRoutes = require("./routes/assessmentsRoutes");
const dialysisRoutes = require("./routes/dialysisInfoRoutes");
const genitourinaryInfoRoutes = require("./routes/genitourinaryInfoRoutes");
const sectionRoutes = require("./routes/sectionRoutes");
const userRoutes = require("./routes/usersRoutes");
const patientOrderRoutes = require("./routes/patientOrderRoutes");
const patientIntakeRoutes = require("./routes/intakeRoutes");
const patientRoutes  = require('./routes/patientsRoutes');
const patientPainScaleRoutes = require('./routes/patientPainScaleRoutes');
const vitalSignsRoutes = require('./routes/vitalSignsRoutes');
const uriinaryDetailsRoutes = require('./routes/urinaryDetailsRoutes');
const patientOutputRoutes = require("./routes/outputRoutes");
const sequelize = require('./models');

// from https://github.com/sequelize/express-example/blob/master/express-main-example/sequelize/index.js
async function assertDatabaseConnectionOk() {
	console.log(`Checking database connection...`);
	try {
		await sequelize.authenticate();
		console.log('Database connection OK!');
	} catch (error) {
		console.log('Unable to connect to the database:');
		console.log(error.message);
		process.exit(1);
	}
}

assertDatabaseConnectionOk();
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/assessments", assessmentRoutes);
app.use("/dialysis", dialysisRoutes);
app.use("/sections", sectionRoutes);
app.use("/users", userRoutes);
app.use("/patients", patientOrderRoutes);
app.use("/patients", patientIntakeRoutes);
app.use("/patients", patientRoutes);
app.use("/patients", patientPainScaleRoutes);
app.use("/patients", vitalSignsRoutes);
app.use("/patients", patientOutputRoutes);
app.use("/assessments", genitourinaryInfoRoutes);
app.use("/urinary-details", uriinaryDetailsRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;