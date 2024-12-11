/* 
Name: Dylan Bellinger
Date: 12/8/2024 
Description: Musculoskeletal Info routes for endpoints.
*/
const express = require("express");
const router = express.Router();

const {
    getPatientMusculoskeletalInfo,
    addPatientMusculoskeletalInfo,
    updatePatientMusculoskeletalInfo,
    deletePatientMusculoskeletalInfo,
} = require("../controller/musculoskeletalInfo.controller");

router
    .route("/:assessment_id/musculoskeletal")
    .get(getPatientMusculoskeletalInfo)
    .post(addPatientMusculoskeletalInfo);

router
    .route("/:assessment_id/musculoskeletal/:id")
    .put(updatePatientMusculoskeletalInfo);

router.route("/musculoskeletal/:id")
    .delete(deletePatientMusculoskeletalInfo);

module.exports = router;