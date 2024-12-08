/* 
Name: Charlize Aponte
Date: 12/7/2024 
Description: Lab Values controller that handles CRUD operations.
Source for adding where clauses: https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
*/

const { models } = require("../models");

// GET /patients/{patientId}/lab-values - Get lab values for a patient
const getPatientLabValues = async (req, res) => {
  try {
    const labValues = await models.LabValues.findAll({
      where: { patient_id: req.params.patient_id },
    });
    res.status(200).json(labValues);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /patients/{patientId}/lab-values - Add a new lab value
const addPatientLabValue = async (req, res) => {
  try {
    const labValue = await models.LabValues.create({
      ...req.body,
      patient_id: req.params.patient_id,
    });
    res.status(201).json(labValue);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT /patients/{patientId}/lab-values/{id} - Update a lab value
const updatePatientLabValue = async (req, res) => {
  try {
    const labValue = await models.LabValues.findOne({
      where: {
        patient_id: req.params.patient_id,
        id: req.params.id,
      },
    });

    if (labValue != null) {
      await labValue.update({
        ...req.body,
        modified_by: req.body.modified_by,
        modified_date: new Date(),
      });
      res.status(200).json(labValue);
    } else {
      res.status(404).json({ error: "Lab Value not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE /patients/{patientId}/lab-values/{id} - Delete a lab value
const deletePatientLabValue = async (req, res) => {
  try {
    const labValue = await models.LabValues.findOne({
      where: {
        patient_id: req.params.patient_id,
        id: req.params.id,
      },
    });

    if (labValue != null) {
      await labValue.destroy();
      res.status(204).json({ message: "Lab Value deleted successfully" });
    } else {
      res.status(404).json({ error: "Lab Value not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getPatientLabValues,
  addPatientLabValue,
  updatePatientLabValue,
  deletePatientLabValue,
};
