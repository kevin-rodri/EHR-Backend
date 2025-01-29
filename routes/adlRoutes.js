/*
Name: Gabby Pierce
Date: 12/7/2024
Description: Routes file for handling ADL-related requests.
*/

const express = require("express");
const router = express.Router();
const {
  getPatientADL,
  addPatientADL,
  updatePatientADL,
  deletePatientADL,
} = require("../controller/adl.controller");
const { validateToken } = require("../middleware/middleware");
router
  .route("/:section_patient_id/adl")
  .get([validateToken], getPatientADL) 
  .post([validateToken], addPatientADL); 

router
  .route("/:section_patient_id/adl/:id")
  .put([validateToken], updatePatientADL) 
  .delete([validateToken], deletePatientADL);

module.exports = router;
