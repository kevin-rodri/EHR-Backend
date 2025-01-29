/* 
Name: Charlize Aponte
Date: 12/7/2024 
Description: WALDO Diagram routes file that establishes all the endpoints needed.
*/

const express = require("express");
const router = express.Router();
const {
  getPatientWaldoDiagram,
  addPatientWaldoDiagram,
  updatePatientWaldoDiagram,
  deletePatientWaldoDiagram,
} = require("../controller/waldoDiagram.controller");
const { validateToken } = require("../middleware/middleware");

router
  .route("/:patient_id/waldo-diagram")
  .get([validateToken], getPatientWaldoDiagram)
  .post([validateToken], addPatientWaldoDiagram);

router
  .route("/:patient_id/waldo-diagram/:id")
  .put([validateToken], updatePatientWaldoDiagram)
  .delete([validateToken], deletePatientWaldoDiagram);

module.exports = router;
