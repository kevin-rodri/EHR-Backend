/*
Name:   Kevin Rodriguez
Date:   12/05/2024
Description: This file contains the routes for the neurological info endpoints.
*/

const express = require("express");
const router = express.Router();

const {
  getPatientNeurologicalInfo,
  addPatientNeurologicalInfo,
  updatePatientNeurologicalInfo,
  deletePatientNeurologicalInfo,
} = require("../controller/neurologicalInfo.controller");

router
  .route("/:assessment_id/neurological")
  .get(getPatientNeurologicalInfo)
  .post(addPatientNeurologicalInfo);

router
  .route("/:assessment_id/neurological/:id")
  .put(updatePatientNeurologicalInfo);

router.route("/neurological/:id").delete(deletePatientNeurologicalInfo);

module.exports = router;
