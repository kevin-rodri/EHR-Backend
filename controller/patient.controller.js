/* 
Name: Dylan Bellinger
Date: 11/11/2024 
Description: Patient controller for handling requests.
*/
const { Patient } = require('../models/Patient');

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
      const patient = await User.findByPk(patient_id);
      if (!patient) {
        return res.status(404).json({ message: 'Patient not found' });
      }
      res.status(200).json(patient);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error retrieving patient' });
    }
  };

  const createPatient = async (req, res) => {
    try {
        const patient = await Patient.create(req.body);
        res.status(201).json(patient);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Error creating patient"});
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
        res.status(500).json({message: "Error updating patient information"});
    }
  };

  const deletePatient = async (req, res) => {
    try {
        const patient = await User.findByPk(patient_id);
        if (patient != null) {
            await patient.destroy(req.body);
            return res.status(201).json(patient);
        } else {
            console.error(error);
            return res.status(404).json({ message: 'Patient not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Error deleting patient"});
    }
  };

  module.exports = {
    getAllPatients,
    getPatientByID,
    createPatient,
    updatePatient,
    deletePatient,
  };