/*
Name:   Kevin Rodriguez
Date:   12/05/2024
Description: This file contains the routes for the pupil info endpoints.
*/

const express = require("express");
const router = express.Router();
const {
  getPupilInfo,
  addPupilInfo,
  updatePupilInfo,
  deletePupilInfo,
} = require("../controller/pupilInfo.controller");

router
  .route("/neurological/:neurological_id")
  .get(getPupilInfo)
  .post(addPupilInfo);

router.route("/neurological/:neurological_id/info/:id").put(updatePupilInfo);

router.route("/:id").delete(deletePupilInfo);

module.exports = router;
