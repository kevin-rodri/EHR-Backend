/*
Name: Gabby Pierce
Date: 12/7/2024
Description: Notes controller that handles requests for managing patient notes.
Source for adding where clauses: https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
*/

const { models } = require("../models");

const getPatientNotes = async (req, res) => {
  try {
    const patientNotes = await models.Note.findAll({
      where: {
        patient_id: req.params.patient_id,
      },
    });
    res.status(200).json(patientNotes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addPatientNote = async (req, res) => {
  try {
    const patientNote = await models.Note.create({
      ...req.body,
      patient_id: req.params.patient_id,
    });
    res.status(201).json(patientNote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updatePatientNote = async (req, res) => {
  try {
    const patientNote = await models.Note.findOne({
      where: {
        patient_id: req.params.patient_id,
        id: req.params.id,
      },
    });
    if (patientNote) {
      await patientNote.update({ ...req.body, modified_date: new Date() });
      res.status(200).json(patientNote);
    } else {
      res.status(404).json({ error: "Note not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deletePatientNote = async (req, res) => {
  try {
    const patientNote = await models.Note.findOne({
      where: {
        patient_id: req.params.patient_id,
        id: req.params.id,
      },
    });

    if (patientNote) {
      await patientNote.destroy();
      res.status(204).json({ message: "Note deleted successfully" });
    } else {
      res.status(404).json({ error: "Note not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getPatientNotes,
  addPatientNote,
  updatePatientNote,
  deletePatientNote,
};
