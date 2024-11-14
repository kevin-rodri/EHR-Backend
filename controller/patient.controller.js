/* 
Name: Dylan Bellinger
Date: 11/11/2024 
Description: Patient controller for handling requests.
*/
const Patient = require('../models/Patient');

const getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.findAll();
    res.status(200).json(patients);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving patients' });
  }
};

const getPatientByID = async (req, res) => {
  const { patient_id } = req.params;
  try {
    const patient = await Patient.findByPk(patient_id);
    if (patient == null) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    res.status(200).json(patient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving patient' });
  }
};

const getPatientBannerInfo = async (req, res) => {
  const { patient_id, date_of_birth, full_name, allergies, height, weight, has_advanced_directives, code_status, precautions, 
    has_insurance } = req.body;
  try {
    const patient = await Patient.find(p => p.patient_id === patient_id, p.date_of_birth === date_of_birth, p.full_name === full_name, p.allergies === allergies, p.height === height,
      p.weight === weight, p.has_advanced_directives === has_advanced_directives, p.code_status === code_status, p.precautions === precautions, p.has_insurance === has_insurance);
    res.status(200).json(patient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving patient information' });
  }
};

const createPatient = async (req, res) => {
  try {
    const patient = await Patient.create(req.body);
    res.status(201).json(patient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating patient" });
  }
};

const updatePatient = async (req, res) => {
  try {
    const patient = await User.findByPk(patient_id);
    if (patient != null) {
      await patient.update(req.body);
      return res.status(201).json(patient);
    } else {
      return res.status(404).json({ message: 'Patient not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating patient information" });
  }
};

const deletePatient = async (req, res) => {
  try {
    const patient = await User.findByPk(patient_id);
    if (patient != null) {
      await patient.destroy(req.body);
      return res.status(204).json(patient);
    } else {
      console.error(error);
      return res.status(404).json({ message: 'Patient not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting patient" });
  }
};

module.exports = {
  getAllPatients,
  getPatientBannerInfo,
  getPatientByID,
  createPatient,
  updatePatient,
  deletePatient,
};