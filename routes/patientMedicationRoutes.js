/* 
Name: Charlize Aponte
Date: 11/28/2024 
Description: Patient Medication routes file that establishes all the endpoints needed.
*/

const express = require("express");
const router = express.Router();
const {
  getScheduledMedications,
  getPRNMedications,
  getAtHomeMedications,
  addPatientMedication,
  updatePatientMedication,
  deletePatientMedication,
} = require("../controller/patientMedications.controller");
const { validateToken } = require("../middleware/middleware");

router
  .route("/:section_patient_id/scheduled")
  .get([validateToken], getScheduledMedications);

router
  .route("/:section_patient_id/prn")
  .get([validateToken], getPRNMedications);

router
  .route("/:section_patient_id/home")
  .get([validateToken], getAtHomeMedications);

router
  .route("/:section_patient_id")
  .post([validateToken], addPatientMedication);

router
  .route("/:section_patient_id/:id")
  .put([validateToken], updatePatientMedication)
  .delete([validateToken], deletePatientMedication);

module.exports = router;
