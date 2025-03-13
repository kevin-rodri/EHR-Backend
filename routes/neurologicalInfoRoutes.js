/*
Name:   Kevin Rodriguez
Date:   12/05/2024
Description: This file contains the routes for the neurological info endpoints.
*/

const express = require("express");
const router = express.Router();

const {
  getStudentNuerologicalInfo,
  getPatientNeurologicalInfo,
  addPatientNeurologicalInfo,
  updatePatientNeurologicalInfo,
  deletePatientNeurologicalInfo,
} = require("../controller/neurologicalInfo.controller");
const { validateToken } = require("../middleware/middleware");

router
  .route("/:section_patient_id/neurological")
  .get([validateToken], getPatientNeurologicalInfo)
  .post([validateToken], addPatientNeurologicalInfo);

router
  .route("/:section_patient_id/neurological/students")
  .get([validateToken],  getStudentNuerologicalInfo);

router
  .route("/:section_patient_id/neurological/:id")
  .put([validateToken], updatePatientNeurologicalInfo)
  .delete([validateToken], deletePatientNeurologicalInfo);

module.exports = router;
