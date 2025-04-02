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
      where: { section_patient_id: req.params.section_patient_id },
    });

    if (!labValues.length) {
      return res
        .status(404)
        .json({ message: "No lab values found for this patient." });
    }

    res.status(200).json(labValues);
  } catch (err) {
    console.error("Error retrieving lab values:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// POST /patients/{patientId}/lab-values - Add a new lab value
const addPatientLabValue = async (req, res) => {
  try {
    const labValue = await models.LabValues.create({
      ...req.body,
      section_patient_id: req.params.section_patient_id,
      created_by: req.user.id,
      created_date: new Date(),
      modified_by: req.user.id,
      modified_date: new Date(),
    });
    res.status(201).json(labValue);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT /patients/{patientId}/lab-values/{id} - Update a lab value
const updatePatientLabValue = async (req, res) => {
  try {
    const { section_patient_id, id } = req.params;

    const labValue = await models.LabValues.findOne({
      where: { section_patient_id, id },
    });

    if (labValue == null) {
      return res.status(404).json({ error: "Lab Value not found" });
    }
    const updatedLabValue = await labValue.update({
      ...req.body,
      section_patient_id: req.params.section_patient_id,
      modified_by: req.user.id,
      modified_date: new Date(),
    });

    res.status(200).json(updatedLabValue);
  } catch (err) {
    console.error("Error updating lab value:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// DELETE /patients/{patientId}/lab-values/{id} - Delete a lab value
const deletePatientLabValue = async (req, res) => {
  try {
    const labValue = await models.LabValues.findOne({
      where: {
        section_patient_id: req.params.section_patient_id,
        id: req.params.id,
      },
    });

    if (labValue != null) {
      await labValue.destroy();
      res.status(204).json(labValue);
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
