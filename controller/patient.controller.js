/* 
Name: Dylan Bellinger
Date: 11/11/2024 
Description: Patient controller for handling requests.
Set up logic borrowed from: https://github.com/sequelize/express-example/blob/master/express-main-example/express/routes/instruments.js: 
Mostly just knowing how to initialize the models in the controllers.
*/
const { models } = require('../models');

const getAllPatients = async (req, res) => {
  try {
    const patients = await models.Patient.findAll();
    res.status(200).json(patients);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving patients" });
  }
};

const getPatientByID = async (req, res) => {
  const { id } = req.params;
  try {
    const patient = await models.Patient.findByPk(id);
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
    console.error(error);
    res.status(500).json({ message: "Error creating patient" });
  }
};

const updatePatient = async (req, res) => {
  const { id } = req.params;
  try {
    const patient = await models.Patient.findByPk(id);
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
  const { id } = req.params;
  try {
    const patient = await User.findByPk(id);
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