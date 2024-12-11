/*
Name: Kevin Rodriguez
Date: 12/11/2024
Description: This file contains the routes for the respiratory info endpoints.
*/

const express = require("express");
const router = express.Router();

const {
  getPatientRespiratoryInfo,
  addPatientRespiratoryInfo,
  updatePatientRespiratoryInfo,
  deletePatientRespiratoryInfo,
} = require("../controller/respiratoryInfo.controller");

router
  .route("/:assessment_id/respiratory")
  .get(getPatientRespiratoryInfo)
  .post(addPatientRespiratoryInfo);

router
  .route("/:assessment_id/respiratory/:id")
  .put(updatePatientRespiratoryInfo);

router.route("/respiratory/:id").delete(deletePatientRespiratoryInfo);

module.exports = router;
