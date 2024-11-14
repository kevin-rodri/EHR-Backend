/* 
Name: Dylan Bellinger
Date: 11/11/2024 
Description: Patient routes for endpoints.
*/
const express = require('express');
const router = express.Router();
const { getAllPatients,
    getPatientBannerInfo,
    getPatientByID,
    createPatient,
    updatePatient,
    deletePatient } = require('../controller/patient.controller');
const { validateToken } = require("../middleware/middleware");

router
    .route("/")
    .get([validateToken], getAllPatients)
    .post([validateToken], createPatient);

router
    .route("/:patient_id")
    .get([validateToken], getPatientByID)
    .get([validateToken], getPatientBannerInfo)
    .put([validateToken], updatePatient)
    .delete([validateToken], deletePatient);

module.exports = router;