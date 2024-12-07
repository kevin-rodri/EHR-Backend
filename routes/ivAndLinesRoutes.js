/* 
Name: Dylan Bellinger
Date: 12/5/2024 
Description: Output routes for related endpoints.
*/
const express = require("express");
const router = express.Router();
const {
    getPatientIVLines,
    addPatientIVLines,
    updatePatientIVLines,
    deletePatientIVLines,
} = require("../controller/IVandLines.controller");

router
    .route("/:patient_id/iv-lines")
    .get(getPatientIVLines)
    .post(addPatientIVLines);

router
    .route("/:patient_id/iv-lines/:id")
    .put(updatePatientIVLines)
    .delete(deletePatientIVLines);

module.exports = router;