/* 
Name: Dylan Bellinger
Date: 11/23/2024 
Description: Intake routes for related endpoints.
*/
const express = require("express");
const router = express.Router();
const {
  getPatientIntake,
  getPatientOutput,
  addPatientIntakeOrOutput,
  updatePatientIntakeOrOutput,
  deletePatientIntakeOrOutput,
} = require("../controller/intake_output.controller");
const { validateToken } = require("../middleware/middleware");
router
  .route("/:section_patient_id/intake")
  .get([validateToken], getPatientIntake);

router
  .route("/:section_patient_id/:id")
  .put([validateToken], updatePatientIntakeOrOutput)
  .delete([validateToken], deletePatientIntakeOrOutput);

router
  .route("/:section_patient_id/output")
  .get([validateToken], getPatientOutput);

router
  .route("/:section_patient_id/")
  .post([validateToken], addPatientIntakeOrOutput);

module.exports = router;
