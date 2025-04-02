/* 
Name: Charlize Aponte
Date: 12/7/2024 
Description: Lab Values routes file that establishes all the endpoints needed.
*/

const express = require("express");
const router = express.Router();
const {
  getPatientLabValues,
  addPatientLabValue,
  updatePatientLabValue,
  deletePatientLabValue,
} = require("../controller/labValues.controller");
const { validateToken } = require("../middleware/middleware");

// GET & POST Lab Values for a specific patient
router
  .route("/:section_patient_id/lab-values")
  .get([validateToken], getPatientLabValues)
  .post([validateToken], addPatientLabValue);

// PUT & DELETE Lab Values by patient and lab value ID
router
  .route("/:section_patient_id/lab-values/:id")
  .put([validateToken],updatePatientLabValue)
  .delete([validateToken], deletePatientLabValue);

module.exports = router;
