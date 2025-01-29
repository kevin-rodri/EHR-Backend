/* 
Name: Kevin Rodriguez
Date: 1/25/2025
Remarks: Controller is used to handle the Medications table in the database.
*/

const { models } = require("../models");

// Get all medications
const getAllMedications = async (req, res) => {
  try {
    const medications = await models.Medications.findAll();
    res.status(200).json(medications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a medication by id
const getMedicationById = async (req, res) => {
  try {
    const medication = await models.Medications.findByPk(req.params.id);
    if (medication != null) {
      res.status(200).json(medication);
    } else {
      res.status(404).json({ error: "Medication not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a medication
const addMedication = async (req, res) => {
  try {
    const newMedication = await models.Medications.create(req.body);
    res.status(201).json(newMedication);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a medication
const updateMedication = async (req, res) => {
  try {
    const medication = await models.Medications.findByPk(req.params.id);
    if (medication != null) {
      await medication.update({
        id: req.params.id,
        ...req.body,
      });
      res.status(200).json(medication);
    } else {
      res.status(404).json({ error: "Medication not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a medication
const deleteMedication = async (req, res) => {
  try {
    const medication = await models.Medications.findByPk(req.params.id);
    if (medication != null) {
      await medication.destroy();
      res.status(201).send();
    } else {
      res.status(404).json({ error: "Medication not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllMedications,
  getMedicationById,
  addMedication,
  updateMedication,
  deleteMedication,
};
