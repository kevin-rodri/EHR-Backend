/* 
Name: Dylan Bellinger
Date: 11/11/2024 
Description: Patient routes for endpoints.
*/
const express = require("express");
const router = express.Router();
const {
  getAllPatients,
  getPatientByID,
  createPatient,
  updatePatient,
  deletePatient,
} = require("../controller/patient.controller");

router.route("/")
.get(getAllPatients)
.post(createPatient);

router
  .route("/:id")
  .get(getPatientByID)
  .put(updatePatient)
  .delete(deletePatient);

module.exports = router;