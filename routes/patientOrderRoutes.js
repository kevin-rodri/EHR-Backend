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

router
  .route("/:patient_id/orders")
  .post(createPatientOrder)
  .get(getPatientOrders);

router
  .route("/:patient_id/orders/:id")
  .put(updatePatientOrder)
  .delete(deletePatientOrder);

module.exports = router;