/*
Name:   Kevin Rodriguez
Date:   12/05/2024
Description: This file contains the routes for the strength info endpoints.
*/

const express = require("express");
const router = express.Router();
const {
    getStrengthInfo,
    addStrengthInfo,
    updateStrengthInfo,
    deleteStrengthInfo
} = require("../controller/strengthInfo.controller");

router
  .route("/neurological/:neurological_id")
  .get(getStrengthInfo)
  .post(addStrengthInfo);

router.route("/neurological/:neurological_id/info/:id").put(updateStrengthInfo);

router.route("/:id").delete(deleteStrengthInfo);

module.exports = router;