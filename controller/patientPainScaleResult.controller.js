/* 
Name: Kevin Rodriguez
Date: 11/27/2024 
Description: Patient Pain Scale controller logic for any requests related to the patient pain scale.
*/

const { models } = require("../models");

// get a patient scale for a patient
const getPatientPainScale = async (req, res) => {
  try {
    const { role, id } = req.user;
    let painScales;

    if (role === "STUDENT") {
      painScales = await models.PatientPainScale.findAll({
        where: {
          section_patient_id: req.params.section_patient_id,
          created_by: id,
        },
      });
    } else if (role === "INSTRUCTOR" || role === "ADMIN") {
      painScales = await models.PatientPainScale.findAll({
        where: {
          section_patient_id: req.params.section_patient_id,
        },
      });
    } else {
      return res.status(403).json({ error: "Unable to access resource" });
    }
    res.status(200).json(painScales);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error retrieving the pain scale for a patient" });
  }
};

const getPatientPainScaleById = async (req, res) => {
  try {
    const painScale = await models.PatientPainScale.findOne({
      where: {
        section_patient_id: req.params.section_patient_id,
        id: req.params.id,
      },
    });
    if (painScale == null) {
      res.status(404).json({ error: "Pain scale not found" });
    } else {
      res.status(200).json(painScale);
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error retrieving the pain scale for a patient" });
  }
};

// create a new pain scale for a patient
const addPatientPainScale = async (req, res) => {
  try {
    const painScale = await models.PatientPainScale.create({
      ...req.body,
      section_patient_id: req.params.section_patient_id,
      created_by: req.user.id,
      created_date: new Date(),
      modified_by: req.user.id,
      modified_date: new Date(),
    });
    res.status(201).json(painScale);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error creating the pain scale for a patient" });
  }
};

// update a patient's pain scale per the patient's id
const updatePatientPainScale = async (req, res) => {
  try {
    const painScale = await models.PatientPainScale.findOne({
      where: {
        section_patient_id: req.params.section_patient_id,
        id: req.params.id,
      },
    });
    if (painScale == null) {
      res.status(404).json({ error: "Pain scale not found" });
    } else {
      await painScale.update({
        ...req.body,
        modified_by: req.user.id,
        modified_date: new Date(),
      });
      res.status(200).json(painScale);
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error updating the pain scale for a patient" });
  }
};

const deletePatientPainScale = async (req, res) => {
  try {
    const painScale = await models.PatientPainScale.findOne({
      where: {
        section_patient_id: req.params.section_patient_id,
        id: req.params.id,
      },
    });

    if (painScale == null) {
      res.status(404).json({ error: "Pain scale not found" });
    } else {
      await painScale.destroy();
      res.status(200).json(painScale);
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error deleting the pain scale for a patient" });
  }
};

module.exports = {
  getPatientPainScale,
  getPatientPainScaleById,
  addPatientPainScale,
  updatePatientPainScale,
  deletePatientPainScale,
};
