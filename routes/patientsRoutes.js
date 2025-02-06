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
.get([validateFacultyToken], getAllPatients)
.post([isUserAdminFromToken], createPatient);

router
  .route("/:id")
  .get([validateToken], getPatientByID)
  .put([validateFacultyToken], updatePatient)
  .patch([validateToken], updatePatient)
  .delete([isUserAdminFromToken] ,deletePatient);

module.exports = router;