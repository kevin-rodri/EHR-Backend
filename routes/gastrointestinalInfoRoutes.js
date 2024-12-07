const express = require("express");
const router = express.Router();

const {
    getPatientGastrointestinalInfo,
    addPatientGastrointestinalInfo,
    updatePatientGastrointestinalInfo,
    deletePatientGastrointestinalInfo,
} = require("../controller/gastrointestinalInfo.controller");

router
    .route("/:assessment_id/gastrointestinal")
    .get(getPatientGastrointestinalInfo)
    .post(addPatientGastrointestinalInfo);

router
    .route("/:assessment_id/gastrointestinal/:id")
    .put(updatePatientGastrointestinalInfo);

router.route("/gastrointestinal/:id")
    .delete(deletePatientGastrointestinalInfo);

module.exports = router;