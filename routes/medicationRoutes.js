/*
Name: Kevin Rodriguez
Date: 1/25/2025
Remarks: Medication Routes to be used to handle aything related to the Medications table in the database.
*/

const express = require("express");
const router = express.Router();
const {
  getAllMedications,
  getMedicationById,
  addMedication,
  updateMedication,
  deleteMedication,
} = require("../controller/medications.controller");

router.route("/").get(getAllMedications).post(addMedication);

router
  .route("/:id")
  .get(getMedicationById)
  .put(updateMedication)
  .delete(deleteMedication);

module.exports = router;
