/* 
Name: Kevin Rodriguez
Date: 11/11/2024 
Description: Patient Order routes file that establishes all the endpoints needed.
*/
const express = require("express");
const router = express.Router();
const {
  getPatientOrders,
  createPatientOrder,
  updatePatientOrder,
  deletePatientOrder,
} = require("../controller/patientOrders.controller");
const { validateToken, validateFacultyToken } = require("../middleware/middleware");

router
  .route("/:patient_id/orders")
  .post([validateToken], createPatientOrder)
  .get([validateToken], getPatientOrders);

router
  .route("/:patient_id/orders/:id")
  .put([validateToken], updatePatientOrder)
  .delete([validateToken], deletePatientOrder);

module.exports = router;