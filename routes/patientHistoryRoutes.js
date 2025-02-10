/*
Name: Gabby Pierce
Date: 12/7/2024
Description: Patient History routes file that establishes all the endpoints needed.
*/

const express = require("express");
const router = express.Router();
const {
  getPatientHistory,
  addPatientHistory,
  updatePatientHistory,
  deletePatientHistory,
} = require("../controller/patientHistory.controller");
const { validateToken } = require("../middleware/middleware");


router
  .route("/:patient_id/history")
  .get([validateToken], getPatientHistory) 
  .post([validateToken], addPatientHistory); 

router
  .route("/:patient_id/history/:id")
  .put([validateToken], updatePatientHistory) 
  .delete([validateToken], deletePatientHistory); 

module.exports = router;
