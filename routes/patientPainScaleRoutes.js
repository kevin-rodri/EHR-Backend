/* 
Name: Kevin Rodriguez
Date: 11/27/2024 
Description: Patient Pain Scales route  file that establishes all the endpoints needed.
*/

const express = require("express");
const router = express.Router();
const {
  getPatientPainScale,
  getPatientPainScaleById,
  addPatientPainScale,
  updatePatientPainScale,
  deletePatientPainScale,
} = require("../controller/patientPainScaleResult.controller");
const { validateToken } = require("../middleware/middleware");

router
  .route("/:section_patient_id/pain-scale")
  .post([validateToken], addPatientPainScale)
  .get([validateToken], getPatientPainScale);

router
  .route("/:section_patient_id/pain-scale/:id")
  .get([validateToken], getPatientPainScaleById)
  .put([validateToken], updatePatientPainScale)
  .delete([validateToken], deletePatientPainScale);

module.exports = router;
