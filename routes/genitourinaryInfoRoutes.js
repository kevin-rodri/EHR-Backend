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
} = require("../controller/genitourinaryInfo.controller");

router
  .route("/:assessment_id/genitourinary")
  .get(getPatientGenitourinaryInfo)
  .post(addPatientGenitourinaryInfo);

router
  .route("/:assessment_id/genitourinary/:id")
  .put(updatePatientGenitourinaryInfo);

router.route("/genitourinary/:id").delete(deletePatientGenitourinaryInfo);

module.exports = router;
