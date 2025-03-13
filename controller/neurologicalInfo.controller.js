/*
Name: Kevin Rodriguez
Date: 12/05/24
Description: Neurological Info controller logic for any requests related to Neurological Info assessments.
*/

const { models } = require("../models");

const getStudentNuerologicalInfo = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// gets the patient neurological info by and assessment id
const getPatientNeurologicalInfo = async (req, res) => {
  try {
    const { id } = req.user;
    const neurologicalInfo = await models.NeurologicalInfo.findOne({
      where: {
        section_patient_id: req.params.section_patient_id,
        created_by: id,
      },
    });

    if (neurologicalInfo == null) {
      res.status(404).json({
        message: "Unable to find neurological info for the patient.",
      });
    }
    res.status(200).json(neurologicalInfo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving neurological info" });
  }
};

// creates a new neurological info record for a patient
const addPatientNeurologicalInfo = async (req, res) => {
  try {
    const neurologicalInfo = await models.NeurologicalInfo.create({
      ...req.body,
      section_patient_id: req.params.section_patient_id,
      created_by: req.user.id,
      created_date: new Date(),
      modified_by: req.user.id,
      modified_date: new Date(),
    });
    res.status(201).json(neurologicalInfo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating neurological info" });
  }
};

// updates a patient's neurological info based on the assessment id
const updatePatientNeurologicalInfo = async (req, res) => {
  try {
    const neurologicalInfo = await models.NeurologicalInfo.findOne({
      where: {
        section_patient_id: req.params.section_patient_id,
        id: req.params.id,
      },
    });

    if (neurologicalInfo == null) {
      return res.status(404).json({
        message: "Unable to find the patient's neurological assessment",
      });
    } else {
      await neurologicalInfo.update({
        id: req.params.id,
        ...req.body,
        section_patient_id: req.params.section_patient_id,
        modified_date: new Date(),
      });
      return res.status(200).json(neurologicalInfo);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating neurological info" });
  }
};

// deletes the patient's neurological info based on the id
const deletePatientNeurologicalInfo = async (req, res) => {
  try {
    const neurologicalInfo = await models.NeurologicalInfo.findOne({
      where: {
        section_patient_id: req.params.section_patient_id,
        id: req.params.id,
      },
    });

    if (neurologicalInfo == null) {
      return res.status(404).json({
        message: "Unable to find the patient's neurological assessment",
      });
    } else {
      await neurologicalInfo.destroy();
      return res.status(204).json(neurologicalInfo);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting neurological info" });
  }
};

module.exports = {
  getStudentNuerologicalInfo,
  getPatientNeurologicalInfo,
  addPatientNeurologicalInfo,
  updatePatientNeurologicalInfo,
  deletePatientNeurologicalInfo,
};
