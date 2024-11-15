/* 
Name: Kevin Rodriguez
Date: 11/11/2024 
Description: Patient Orders controller that handles requests.
Source for adding where clauses: https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
*/
const PatientOrders = require("../models/PatientOrders");

const getPatientOrders = async (req, res) => {
  try {
    const patientOrder = await PatientOrders.findAll(req.params.patient_id);
    res.status(200).json(patientOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createPatientOrder = async (req, res) => {
  try {
    const patientOrder = await PatientOrders.create({
      ...req.body,
      patient_id: req.params.patient_id,
    });
    res.status(201).json(patientOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updatePatientOrder = async (req, res) => {
  try {
    const patientOrder = await PatientOrders.findOne({
      where: {
        patient_id: req.params.patient_id,
        patient_order_id: req.params.order_id,
      },
    });
    if (patientOrder != null) {
      await patientOrder.update({ ...req.body, modifed_date: new Date() });
      res.status(201).json(patientOrder);
    } else {
      res.status(404).json({ error: "Patient Order not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deletePatientOrder = async (req, res) => {
  try {
    const patientOrder = await PatientOrders.findOne({
      where: {
        patient_id: req.params.patient_id,
        patient_order_id: req.params.order_id,
      },
    });

    if (patientOrder != null) {
      await patientOrder.destroy();
      res.status(204).json(patientOrder);
    } else {
      res.status(404).json({ error: "Patient Order not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getPatientOrders,
  createPatientOrder,
  updatePatientOrder,
  deletePatientOrder,
};
