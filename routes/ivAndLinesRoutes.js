/* 
Name: Dylan Bellinger
Date: 12/5/2024 
Description: Output routes for related endpoints.
*/
const express = require("express");
const router = express.Router();
const {
  getPatientIVLines,
  addPatientIVLines,
  updatePatientIVLines,
  deletePatientIVLines,
} = require("../controller/ivAndLines.controller");
const { validateToken } = require("../middleware/middleware");

router
  .route("/:section_patient_id/iv-lines")
  .get([validateToken], getPatientIVLines)
  .post([validateToken], addPatientIVLines);

router
  .route("/:section_patient_id/iv-lines/:id")
  .put([validateToken], updatePatientIVLines)
  .delete([validateToken], deletePatientIVLines);

module.exports = router;
