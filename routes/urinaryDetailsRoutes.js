/*
Name:   Kevin Rodriguez
Date:   11/30/2024
Description: This file contains the routes for the genitourinary info endpoints.
*/

const express = require("express");
const router = express.Router();
const {
  getUrinaryDetails,
  addUrinaryDetails,
  updateUrinaryDetails,
  deleteUrinaryDetails,
} = require("../controller/urinaryDetails.controller");

router
  .route("/genitourinary/:genitourinary_id")
  .get(getUrinaryDetails)
  .post(addUrinaryDetails);

router
  .route("/genitourinary/:genitourinary_id/info/:id")
  .put(updateUrinaryDetails);

router.route("/:id").delete(deleteUrinaryDetails);

module.exports = router;
