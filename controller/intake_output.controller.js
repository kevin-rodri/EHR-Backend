/* 
Name: Dylan Bellinger
Date: 11/23/2024 
Description: Intake controller for related requests.
*/

const { models } = require("../models");

// Get all intake records for a patient
const getPatientIntake = async (req, res) => {
  try {
    const { role, id } = req.user;
    let intakeRecords;

    if (role === "STUDENT") {
      intakeRecords = await models.Intake_Output.findAll({
        where: {
          section_patient_id: req.params.section_patient_id,
          intake_or_output: "INTAKE",
          created_by: id,
        },
      });
    } else if (role === "INSTRUCTOR" || role === "ADMIN") {
      intakeRecords = await models.Intake_Output.findAll({
        where: {
          section_patient_id: req.params.section_patient_id,
          intake_or_output: "INTAKE",
        },
      });
    } else {
      return res.status(403).json({ error: "Unable to access resource" });
    }

    res.status(200).json(intakeRecords);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving intake records" });
  }
};

// Get all output records for a patient
const getPatientOutput = async (req, res) => {
  try {
    const { role, id } = req.user;
    let outputRecords;

    if (role === "STUDENT") {
      outputRecords = await models.Intake_Output.findAll({
        where: {
          section_patient_id: req.params.section_patient_id,
          intake_or_output: "OUTPUT",
          created_by: id,
        },
      });
    } else if (role === "INSTRUCTOR" || role === "ADMIN") {
      outputRecords = await models.Intake_Output.findAll({
        where: {
          section_patient_id: req.params.section_patient_id,
          intake_or_output: "OUTPUT",
        },
      });
    } else {
      return res.status(403).json({ error: "Unable to access resource" });
    }

    res.status(200).json(outputRecords);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving output records" });
  }
};

// Add a new intake or output record for a patient
const addPatientIntakeOrOutput = async (req, res) => {
  try {
    const record = await models.Intake_Output.create({
      ...req.body,
      section_patient_id: req.params.section_patient_id,
      created_by: req.user.id,
      created_date: new Date(),
      modified_by: req.user.id,
      modified_date: new Date(),
    });
    res.status(201).json(record);
  } catch (error) {
    res.status(500).json({ message: "Error creating record" });
  }
};

// Update an intake or output record for a patient
const updatePatientIntakeOrOutput = async (req, res) => {
  try {
    const record = await models.Intake_Output.findOne({
      where: {
        section_patient_id: req.params.section_patient_id,
        id: req.params.id,
      },
    });
    if (record == null) {
      res.status(404).json({ error: "Record not found" });
    } else {
      await record.update({
        ...req.body,
        modified_by: req.user.id,
        modified_date: new Date(),
      });
      res.status(200).json(record);
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating record" });
  }
};

// Delete an intake or output record for a patient
const deletePatientIntakeOrOutput = async (req, res) => {
  try {
    const record = await models.Intake_Output.findOne({
      where: {
        section_patient_id: req.params.section_patient_id,
        id: req.params.id,
      },
    });

    if (record == null) {
      res.status(404).json({ error: "Record not found" });
    } else {
      await record.destroy();
      res.status(200).json(record);
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting record" });
  }
};

module.exports = {
  getPatientIntake,
  getPatientOutput,
  addPatientIntakeOrOutput,
  updatePatientIntakeOrOutput,
  deletePatientIntakeOrOutput,
};
