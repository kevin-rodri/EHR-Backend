/*
Name: Charlize Aponte
Date: 11/28/2024
Description: Patient Medications controller that handles requests.
Source for adding where clauses: https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
*/
const { models } = require("../models");

// gets all the scheduled medications for all patients
const getScheduledMedications = async (req, res) => {
  try {
    const { role, id } = req.user;
    let medications;

    if (role === "STUDENT") {
      medications = await models.PatientMedications.findAll({
        where: {
          section_patient_id: req.params.section_patient_id,
          medication_type: "SCHEDULED",
          created_by: id,
        },
      });
    } else if (role === "INSTRUCTOR" || role === "ADMIN") {
      medications = await models.PatientMedications.findAll({
        where: {
          section_patient_id: req.params.section_patient_id,
          medication_type: "SCHEDULED",
        },
      });
    } else {
      return res.status(403).json({ error: "Unable to access resource" });
    }

    res.status(200).json(medications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// gets all the PRN medications for all patients
const getPRNMedications = async (req, res) => {
  try {
    const { role, id } = req.user;
    let medications;

    if (role === "STUDENT") {
      medications = await models.PatientMedications.findAll({
        where: {
          section_patient_id: req.params.section_patient_id,
          medication_type: "PRN",
          created_by: id,
        },
      });
    } else if (role === "INSTRUCTOR" || role === "ADMIN") {
      medications = await models.PatientMedications.findAll({
        where: {
          section_patient_id: req.params.section_patient_id,
          medication_type: "PRN",
        },
      });
    } else {
      return res.status(403).json({ error: "Unable to access resource" });
    }

    res.status(200).json(medications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// gets all the at-home medications for all patients
const getAtHomeMedications = async (req, res) => {
  try {
    const { role, id } = req.user;
    if (role === "STUDENT") {
      medications = await models.PatientMedications.findAll({
        where: {
          section_patient_id: req.params.section_patient_id,
          medication_type: "AT-HOME",
          created_by: id,
        },
      });
    } else if (role === "INSTRUCTOR" || role === "ADMIN") {
      medications = await models.PatientMedications.findAll({
        where: {
          section_patient_id: req.params.section_patient_id,
          medication_type: "AT-HOME",
        },
      });
      res.status(200).json(medications);
    } else {
      return res.status(403).json({ error: "Unable to access resource" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a new medication for a patient
const addPatientMedication = async (req, res) => {
  try {
    const medication = await models.PatientMedications.create({
      ...req.body,
      section_patient_id: req.params.section_patient_id,
      created_by: req.user.id,
      created_date: new Date(),
      modified_by: req.user.id,
      modified_date: new Date(),
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
        section_patient_id: req.params.section_patient_id,
        id: req.params.id,
      },
    });
    if (medication == null) {
      res.status(404).json({ error: "Medication entry not found" });
    } else {
      await medication.update({
        ...req.body,
        modified_by: req.user.id,
        modified_date: new Date(),
      });
      res.status(200).json(medication);
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
        section_patient_id: req.params.section_patient_id,
        id: req.params.id,
      },
    });

    if (medication == null) {
      res.status(404).json({ error: "Medication entry not found" });
    } else {
      await medication.destroy();
      res.status(200).json(medication);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getScheduledMedications,
  getPRNMedications,
  getAtHomeMedications,
  addPatientMedication,
  updatePatientMedication,
  deletePatientMedication,
};