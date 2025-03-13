/*
Name: Kevin Rodriguez
Date: 12/11/2024
Description: This file contains the routes for the respiratory info endpoints.
*/

const express = require("express");
const router = express.Router();

const {
  getStudentRespiratoryInfo,
  getPatientRespiratoryInfo,
  addPatientRespiratoryInfo,
  updatePatientRespiratoryInfo,
  deletePatientRespiratoryInfo,
} = require("../controller/respiratoryInfo.controller");
const { validateToken } = require("../middleware/middleware");

router
  .route("/:section_patient_id/respiratory")
  .get([validateToken], getPatientRespiratoryInfo)
  .get([validateToken], addPatientRespiratoryInfo);

router
  .route("/:section_patient_id/respiratory/students")
  .get([validateToken], getStudentRespiratoryInfo);

router
  .route("/:section_patient_id/respiratory/:id")
  .put([validateToken], updatePatientRespiratoryInfo)
  .delete([validateToken], deletePatientRespiratoryInfo);

module.exports = router;
