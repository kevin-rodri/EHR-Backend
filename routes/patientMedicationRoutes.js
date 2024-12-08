/* 
Name: Charlize Aponte
Date: 11/28/2024 
Description: Patient Medication routes file that establishes all the endpoints needed.
*/

const express = require("express");
const router = express.Router();
const {
  getAllMedications,
  getPatientMedications,
  addPatientMedication,
  updatePatientMedication,
  deletePatientMedication,
} = require("../controller/patientMedications.controller");


router
  .route("/medications")
  .get(getAllMedications);

router
  .route("/:patient_id/medications")
  .get(getPatientMedications)
  .post(addPatientMedication);

router
  .route("/:patient_id/medications/:id")
  .put(updatePatientMedication)
  .delete(deletePatientMedication);

module.exports = router;
