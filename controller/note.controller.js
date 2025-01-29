/*
Name: Gabby Pierce
Date: 12/7/2024
Description: Notes controller that handles requests for managing patient notes.
Source for adding where clauses: https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
*/

const { models } = require("../models");

const getPatientNotes = async (req, res) => {
  try {
    const { role, id } = req.user;
    let patientNotes;
    if (role === "STUDENT") {
      patientNotes = await models.Note.findAll({
        where: {
          section_patient_id: req.params.section_patient_id,
          created_by: id,
        },
      });
    } else if (role === "INSTRUCTOR" || role === "ADMIN") {
      patientNotes = await models.Note.findAll({
        where: {
          section_patient_id: req.params.section_patient_id,
        },
      });
    } else {
      return res.status(403).json({ error: "Unable to access resource" });
    }
    res.status(200).json(patientNotes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addPatientNote = async (req, res) => {
  try {
    const patientNote = await models.Note.create({
      ...req.body,
      section_patient_id: req.params.section_patient_id,
      created_by: req.user.id,
      created_date: new Date(),
      modified_by: req.user.id,
      modified_date: new Date(),
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
        section_patient_id: req.params.section_patient_id,
        id: req.params.id,
      },
    });
    if (patientNote) {
      await patientNote.update({
        ...req.body,
        modified_by: req.user.id,
        modified_date: new Date(),
      });
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
        section_patient_id: req.params.section_patient_id,
        id: req.params.id,
      },
    });

    if (patientNote) {
      await patientNote.destroy();
      res.status(204).json(patientNote);
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
