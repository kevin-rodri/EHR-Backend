/* 
Name: Dylan Bellinger
Date: 11/11/2024 
Description: Patient controller for handling requests.
Set up logic borrowed from: https://github.com/sequelize/express-example/blob/master/express-main-example/express/routes/instruments.js: 
Mostly just knowing how to initialize the models in the controllers.
*/
const { models } = require("../models");

const getAllPatients = async (req, res) => {
  try {
    const patients = await models.Patient.findAll({
      attributes: [
        "id",
        "medical_registration_number",
        "date_of_birth",
        "religion",
        "full_name",
        "weight",
        "height",
        "has_insurance",
        "has_advanced_directives",
        "allergies",
        "emergency_contact_full_name",
        "emergency_contact_phone_number",
        "code_status",
        "precautions",
        "barcode_value",
      ],
    });
    res.status(200).json(patients);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving patients" });
  }
};

const getPatientByID = async (req, res) => {
  try {
    const patient = await models.Patient.findOne({
      where: { id: req.params.id },
      attributes: [
        "id",
        "medical_registration_number",
        "date_of_birth",
        "religion",
        "full_name",
        "weight",
        "height",
        "has_insurance",
        "has_advanced_directives",
        "allergies",
        "emergency_contact_full_name",
        "emergency_contact_phone_number",
        "code_status",
        "precautions",
        "barcode_value",
      ],
    });
    if (patient == null) {
      return res.status(404).json({ message: "Patient not found" });
    }
    res.status(200).json(patient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving patient" });
  }
};

const createPatient = async (req, res) => {
  try {
    const patient = await models.Patient.create(req.body);
    res.status(201).json(patient);
  } catch (error) {
    console.error("Create Patient Error:", error);
    if (error.name === "SequelizeValidationError") {
      return res.status(400).json({
        message: "Validation failed",
        errors: error.errors.map((e) => e.message),
      });
    }
    res.status(500).json({ message: "Error creating patient" });
  }
};

const updatePatient = async (req, res) => {
  try {
    const patient = await models.Patient.findOne({
      where: { id: req.params.id },
      attributes: [
        "id",
        "medical_registration_number",
        "date_of_birth",
        "religion",
        "full_name",
        "weight",
        "height",
        "has_insurance",
        "has_advanced_directives",
        "allergies",
        "emergency_contact_full_name",
        "emergency_contact_phone_number",
        "code_status",
        "precautions",
        "barcode_value",
      ],
    });
    if (patient != null) {
      await patient.update(req.body);
      return res.status(200).json(patient);
    } else {
      return res.status(404).json({ message: "Patient not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating patient information" });
  }
};

const deletePatient = async (req, res) => {
  try {
    const patient = await models.Patient.findOne({
      where: { id: req.params.id },
      attributes: [
        "id",
        "medical_registration_number",
        "date_of_birth",
        "religion",
        "full_name",
        "weight",
        "height",
        "has_insurance",
        "has_advanced_directives",
        "allergies",
        "emergency_contact_full_name",
        "emergency_contact_phone_number",
        "code_status",
        "precautions",
        "barcode_value",
      ],
    });
    if (patient != null) {
      await patient.destroy(req.body);
      return res.status(204).json(patient);
    } else {
      console.error(error);
      return res.status(404).json({ message: "Patient not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting patient" });
  }
};

module.exports = {
  getAllPatients,
  getPatientByID,
  createPatient,
  updatePatient,
  deletePatient,
};
