/* 
Name: Dylan Bellinger
Date: 11/23/2024 
Description: Intake routes for related endpoints.
*/
const express = require("express");
const router = express.Router();
const {
  getPatientIntake,
  createPatientIntake,
  updatePatientIntake,
  deletePatientIntake,
} = require("../controller/intake.controller");

router
  .route("/:patient_id/intake")
  .get(getPatientIntake)
  .post(createPatientIntake);

router
  .route("/:patient_id/intake/:intake_id")
  .put(updatePatientIntake)
  .delete(deletePatientIntake);

module.exports = router;
