/*
Name:   Kevin Rodriguez
Date:   12/05/2024
Description: This file contains the routes for the consciousness info endpoints.
*/

const express = require("express");
const router = express.Router();
const {
    getConsciousnessInfo,
    addConsciousnessInfo,
    updateConnsciousnessInfo,
    deleteConciousnessInfo,
} = require("../controller/consciousnessInfo.controller");

router
  .route("/neurological/:neurological_id")
  .get(getConsciousnessInfo)
  .post(addConsciousnessInfo);

router
  .route("/neurological/:neurological_id/info/:id")
  .put(updateConnsciousnessInfo);

router.route("/:id").delete(deleteConciousnessInfo);

module.exports = router;
