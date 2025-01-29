/*
Name: Kevin Rodriguez
Date: 1/25/2025
Description: Pain Scale Routes to be used to handle anything related to the Pain Scale table in the database.
*/

const express = require("express");
const router = express.Router();
const {
  getPainScales,
  getPainScaleById,
  addPainScale,
  updatePainScale,
  deletePainScale,
} = require("../controller/painScale.controller");

router.route("/").get(getPainScales).post(addPainScale);

router
  .route("/:id")
  .get(getPainScaleById)
  .put(updatePainScale)
  .delete(deletePainScale);

module.exports = router;
