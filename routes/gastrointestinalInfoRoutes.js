/* 
Name: Dylan Bellinger
Date: 12/8/2024 
Description: Gastrointestinal Info routes for endpoints.
*/
const express = require("express");
const router = express.Router();

const {
  getStudentGastrointestinalInfo,
  getPatientGastrointestinalInfo,
  addPatientGastrointestinalInfo,
  updatePatientGastrointestinalInfo,
  deletePatientGastrointestinalInfo,
} = require("../controller/gastrointestinalInfo.controller");
const { validateToken } = require("../middleware/middleware");

router
  .route("/:section_patient_id/gastrointestinal")
  .get([validateToken], getPatientGastrointestinalInfo)
  .post([validateToken], addPatientGastrointestinalInfo);

router
  .route("/:section_patient_id/gastrointestinal/students")
  .get([validateToken], getStudentGastrointestinalInfo);
router
  .route("/:section_patient_id/gastrointestinal/:id")
  .put([validateToken], updatePatientGastrointestinalInfo)
  .delete([validateToken], deletePatientGastrointestinalInfo);

module.exports = router;
