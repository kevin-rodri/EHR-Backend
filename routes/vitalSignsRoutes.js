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

router
  .route("/:patient_id/vital-signs")
  .get(getPatientVitalSigns)
  .post(addPatientVitalSigns);

router
  .route("/:patient_id/vital-signs/:id")
  .put(updatePatientVitalSigns)
  .delete(deletePatientVitalSigns);

module.exports = router;