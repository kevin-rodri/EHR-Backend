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


router
  .route("/:patient_id/waldo-diagram")
  .get(getPatientWaldoDiagram)
  .post(addPatientWaldoDiagram);

router
  .route("/:patient_id/waldo-diagram/:id")
  .put(updatePatientWaldoDiagram)
  .delete( deletePatientWaldoDiagram);

module.exports = router;
