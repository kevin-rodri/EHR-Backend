require("dotenv").config();
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const assessmentRoutes = require("./routes/assessmentsRoutes");
const dialysisRoutes = require("./routes/dialysisInfoRoutes");
const genitourinaryInfoRoutes = require("./routes/genitourinaryInfoRoutes");
const neurologicalInfoRoutes = require("./routes/neurologicalInfoRoutes");
const consciousnessInfoRoutes = require("./routes/consciousnessInfoRoutes");
const pupilInfoRoutes = require("./routes/pupilInfoRoutes");
const strengthInfoRoutes = require("./routes/strengthInfoRoutes");
const sectionRoutes = require("./routes/sectionRoutes");
const userRoutes = require("./routes/usersRoutes");
const patientOrderRoutes = require("./routes/patientOrderRoutes");
const patientIntakeRoutes = require("./routes/intakeRoutes");
const patientRoutes = require("./routes/patientsRoutes");
const patientPainScaleRoutes = require("./routes/patientPainScaleRoutes");
const patientIVLinesRoutes = require("./routes/IVandLinesRoutes");
const vitalSignsRoutes = require("./routes/vitalSignsRoutes");
const uriinaryDetailsRoutes = require("./routes/urinaryDetailsRoutes");
const patientOutputRoutes = require("./routes/outputRoutes");
const gastrointestinalInfoRoutes = require("./routes/gastrointestinalInfoRoutes");
const patientRoutes  = require("./routes/patientsRoutes");
const patientHistoryRoutes = require("./routes/patientHistoryRoutes");
const noteRoutes = require("./routes/noteRoutes");
const adlRoutes = require("./routes/adlRoutes");
const musculoskeletalInfoRoutes = require("./routes/musculoskeletalInfoRoutes");
const patientMedicationRoutes = require("./routes/patientMedicationRoutes");
const waldoDiagramRoutes = require("./routes/waldoDiagramRoutes");
const labValuesRoutes = require("./routes/labValuesRoutes");
const sequelize = require("./models");

// from https://github.com/sequelize/express-example/blob/master/express-main-example/sequelize/index.js
async function assertDatabaseConnectionOk() {
  console.log(`Checking database connection...`);
  try {
    await sequelize.authenticate();
    console.log("Database connection OK!");
  } catch (error) {
    console.log("Unable to connect to the database:");
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
app.use("/patients", patientIVLinesRoutes);
app.use("/assessments", genitourinaryInfoRoutes);
app.use("/assessments", neurologicalInfoRoutes);
app.use("/assessments", gastrointestinalInfoRoutes);
app.use("/assessments", musculoskeletalInfoRoutes);
app.use("/consciousness", consciousnessInfoRoutes);
app.use("/pupils", pupilInfoRoutes);
app.use("/strength", strengthInfoRoutes);
app.use("/urinary-details", uriinaryDetailsRoutes);
app.use("/patients", noteRoutes);
app.use("/patients", patientHistoryRoutes);
app.use("/patients", adlRoutes);
app.use("/patients", patientMedicationRoutes);
app.use("/patients", waldoDiagramRoutes);
app.use("/patients", labValuesRoutes);

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
