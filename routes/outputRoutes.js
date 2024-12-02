/* 
Name: Dylan Bellinger
Date: 12/2/2024 
Description: Output routes for related endpoints.
*/
const express = require("express");
const router = express.Router();
const {
    getPatientOutput,
    addPatientOutput,
    updatePatientOutput,
    deletePatientOutput,
} = require("../controller/output.controller");

router
    .route("/:patient_id/output")
    .get(getPatientOutput)
    .post(addPatientOutput);

router
    .route("/:patient_id/output/:id")
    .put(updatePatientOutput)
    .delete(deletePatientOutput);

module.exports = router;