/*
Name: Kevin Rodriguez
Date: 12/11/2024
Description: This file contains the routes for the sputum chest tubes endpoints.
*/

const express = require("express");
const router = express.Router();
const {
  getSputumChestTubes,
  addSputumChestTubes,
  updateSputumChestTubes,
  deleteSputumChestTubes,
} = require("../controller/sputumChestTubes.controller");


router
  .route("/respiratory/:respiratory_id")
  .get(getSputumChestTubes)
  .post(addSputumChestTubes);

router
  .route("/respiratory/:respiratory_id/tubes/:id")
  .put(updateSputumChestTubes);

router.route("/:id").delete(deleteSputumChestTubes);

module.exports = router;
