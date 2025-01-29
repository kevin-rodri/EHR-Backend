/* 
Name: Kevin Rodriguez
Date: 11/27/2024 
Description: Vital Signs route  file that establishes all the endpoints needed.
*/

const express = require("express");
const router = express.Router();
const {
  getPatientVitalSigns,
  addPatientVitalSigns,
  updatePatientVitalSigns,
  deletePatientVitalSigns,
} = require("../controller/vitalSigns.controller");
const { validateToken } = require("../middleware/middleware");

router
  .route("/:section_patient_id/vital-signs")
  .get([validateToken], getPatientVitalSigns)
  .post([validateToken], addPatientVitalSigns);

router
  .route("/:section_patient_id/vital-signs/:id")
  .put([validateToken], updatePatientVitalSigns)
  .delete([validateToken], deletePatientVitalSigns);

module.exports = router;