/* 
Name: Dylan Bellinger
Date: 12/8/2024 
Description: Musculoskeletal Info routes for endpoints.
*/
const express = require("express");
const router = express.Router();

const {
    getStudentMusculoskeletalInfo,
    getPatientMusculoskeletalInfo,
    addPatientMusculoskeletalInfo,
    updatePatientMusculoskeletalInfo,
    deletePatientMusculoskeletalInfo,
} = require("../controller/musculoskeletalInfo.controller");
const { validateToken } = require("../middleware/middleware");

router
    .route("/:section_patient_id/musculoskeletal")
    .get([validateToken], getPatientMusculoskeletalInfo)
    .post([validateToken], addPatientMusculoskeletalInfo);

router.route("/:section_patient_id/musculoskeletal/students")
    .get([validateToken], getStudentMusculoskeletalInfo);

router
    .route("/:section_patient_id/musculoskeletal/:id")
    .put([validateToken], updatePatientMusculoskeletalInfo)
    .delete([validateToken], deletePatientMusculoskeletalInfo);


module.exports = router;