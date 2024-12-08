/*
Name: Gabby Pierce 
Date: 12/7/2024
Description: Patient History controller that handles requests for managing patient history.
Source for adding where clauses: https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
*/

const { models } = require("../models");

// GET /patients/{patientId}/history - Get patient history
const getPatientHistory = async (req, res) => {
  try {
    const patientHistory = await models.PatientHistory.findAll({
      where: {
        patient_id: req.params.patient_id,
      },
    });
    res.status(200).json(patientHistory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /patients/{patientId}/history - Add to patient history
const addPatientHistory = async (req, res) => {
  try {
    const newHistory = await models.PatientHistory.create({
      ...req.body,
      patient_id: req.params.patient_id,
    });
    res.status(201).json(newHistory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT /patients/{patientId}/history/{id} - Update specific history entry
const updatePatientHistory = async (req, res) => {
  try {
    const historyEntry = await models.PatientHistory.findOne({
      where: {
        patient_id: req.params.patient_id,
        id: req.params.id,
      },
    });

    if (historyEntry != null) {
      await historyEntry.update({ ...req.body, modified_date: new Date() });
      res.status(200).json(historyEntry);
    } else {
      res.status(404).json({ error: "Patient History entry not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE /patients/{patientId}/history/{id} - Delete a specific history entry
const deletePatientHistory = async (req, res) => {
  try {
    const historyEntry = await models.PatientHistory.findOne({
      where: {
        patient_id: req.params.patient_id,
        id: req.params.id,
      },
    });

    if (historyEntry != null) {
      await historyEntry.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Patient History entry not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getPatientHistory,
  addPatientHistory,
  updatePatientHistory,
  deletePatientHistory,
};
