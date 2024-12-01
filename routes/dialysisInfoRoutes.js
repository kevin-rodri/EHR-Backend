/*
Name:   Kevin Rodriguez
Date:   11/30/2024
Description: This file contains the routes for the dialysis info endpoints.
*/

const express = require("express");
const router = express.Router();
const {
  getDialysisInfo,
  addDialysisInfo,
  updateDialysisInfo,
  deleteDialysisInfo,
} = require("../controller/dialysisInfo.controller");

router
  .route("/genitourinary/:genitourinary_id")
  .get(getDialysisInfo)
  .post(addDialysisInfo);

router
  .route("/genitourinary/:genitourinary_id/info/:id")
  .put(updateDialysisInfo);

router.route("/:id").delete(deleteDialysisInfo);

module.exports = router;
