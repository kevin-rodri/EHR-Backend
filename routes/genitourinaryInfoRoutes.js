/*
Name:   Kevin Rodriguez
Date:   11/30/2024
Description: This file contains the routes for the genitourinary info endpoints.
*/

const express = require("express");
const router = express.Router();

const {
  getPatientGenitourinaryInfo,
  addPatientGenitourinaryInfo,
  updatePatientGenitourinaryInfo,
  deletePatientGenitourinaryInfo,
  getStudentGenitournaryInfo
} = require("../controller/genitourinaryInfo.controller");
const { validateToken } = require("../middleware/middleware");


router
  .route("/:section_patient_id/genitourinary")
  .get([validateToken], getPatientGenitourinaryInfo)
  .post([validateToken], addPatientGenitourinaryInfo);

  router
  .route("/:section_patient_id/genitourinary/students")
  .get([validateToken], getStudentGenitournaryInfo);

router
  .route("/:section_patient_id/genitourinary/:id")
  .put([validateToken], updatePatientGenitourinaryInfo)
  .delete([validateToken], deletePatientGenitourinaryInfo);


module.exports = router;
