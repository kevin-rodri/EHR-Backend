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
const { validateToken, isUserAdminFromToken, validateFacultyToken } = require("../middleware/middleware");

router.route("/")
.get([validateToken], getAllPatients)
.post([validateToken], createPatient);

router
  .route("/:id")
  .get([validateToken], getPatientByID)
  .put([validateToken], updatePatient)
  .patch([validateToken], updatePatient)
  .delete([validateToken] ,deletePatient);

module.exports = router;