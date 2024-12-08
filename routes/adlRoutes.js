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

router
  .route("/:patient_id/adl")
  .get(getPatientADL) 
  .post(addPatientADL); 

router
  .route("/:patient_id/adl/:id")
  .put(updatePatientADL) 
  .delete(deletePatientADL);

module.exports = router;
