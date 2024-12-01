/*
Name:   Kevin Rodriguez
Date:   11/30/2024
Description: This file contains the routes for the assessments endpoints.
*/

const express = require("express");
const router = express.Router();
const {
  getPatientAssessment,
  deletePatientAssessment,
} = require("../controller/assessment.controller");

router
  .route("/:patient_id")
  .get(getPatientAssessment)
  .delete(deletePatientAssessment);

module.exports = router;
