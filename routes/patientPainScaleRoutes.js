/* 
Name: Kevin Rodriguez
Date: 11/27/2024 
Description: Patient Pain Scales route  file that establishes all the endpoints needed.
*/

const express = require("express");
const router = express.Router();
const {
  getPatientPainScale,
  addPatientPainScale,
  updatePatientPainScale,
} = require("../controller/patientPainScale.controller");

router.route("/:patient_id/pain-scale").post(addPatientPainScale);

router
  .route("/:patient_id/pain-scale/:id")
  .get(getPatientPainScale)
  .put(updatePatientPainScale);

module.exports = router;
