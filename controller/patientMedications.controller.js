/*
Name: Charlize Aponte
Date: 11/28/2024
Description: Patient Medications controller that handles requests.
Source for adding where clauses: https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
*/


const { models } = require("../models");

// Get all medications for all patients
const getAllMedications = async (req, res) => {
  try {
    const medications = await models.PatientMedications.findAll();
    res.status(200).json(medications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all medications for a specific patient
const getPatientMedications = async (req, res) => {
  try {
    const medications = await models.PatientMedications.findAll({
      where: { patient_id: req.params.patient_id },
    });
    res.status(200).json(medications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a new medication for a patient
const addPatientMedication = async (req, res) => {
  try {
    const medication = await models.PatientMedications.create({
      ...req.body,
      patient_id: req.params.patient_id,
    });
    res.status(201).json(medication);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a medication entry for a patient
const updatePatientMedication = async (req, res) => {
  try {
    const medication = await models.PatientMedications.findOne({
      where: {
        patient_id: req.params.patient_id,
        id: req.params.id,
      },
    });

    if (medication) {
      await medication.update({
        ...req.body,
        modified_date: new Date(),
      });
      res.status(200).json(medication);
    } else {
      res.status(404).json({ error: "Medication entry not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a medication entry for a patient
const deletePatientMedication = async (req, res) => {
  try {
    const medication = await models.PatientMedications.findOne({
      where: {
        patient_id: req.params.patient_id,
        id: req.params.id,
      },
    });

    if (medication) {
      await medication.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Medication entry not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllMedications,
  getPatientMedications,
  addPatientMedication,
  updatePatientMedication,
  deletePatientMedication,
};
