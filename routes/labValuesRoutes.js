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


// GET & POST Lab Values for a specific patient
router
  .route("/:patient_id/lab-values")
  .get(getPatientLabValues)
  .post(addPatientLabValue);

// PUT & DELETE Lab Values by patient and lab value ID
router
  .route("/:patient_id/lab-values/:id")
  .put(updatePatientLabValue)
  .delete(deletePatientLabValue);

module.exports = router;
