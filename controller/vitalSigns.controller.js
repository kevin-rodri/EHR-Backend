/* 
Name: Kevin Rodriguez
Date: 11/27/2024 
Description: Vital Signs controller logic for any requests related to vital signs.
*/
const { models } = require("../models");

// gets patient vital signs by patient id
const getPatientVitalSigns = async (req, res) => {
  try {
    const vitalSigns = await models.VitalSigns.findAll({
      where: { patient_id: req.params.patient_id },
    });
    res.status(200).json(vitalSigns);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving vital signs" });
  }
};

// creates new vital signs record for a patient
const addPatientVitalSigns = async (req, res) => {
  try {
    const { patient_id } = req.params;
    const vitalSigns = await models.VitalSigns.create({
      patient_id,
      ...req.body,
    });
    res.status(200).json(vitalSigns);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating vital signs" });
  }
};

// updates a patient's vital signs based on patient id and vital signs id
const updatePatientVitalSigns = async (req, res) => {
  try {
    const vitalSigns = await models.VitalSigns.findOne({
      where: { id: req.params.id, patient_id: req.params.patient_id },
    });

    if (vitalSigns != null) {
      await vitalSigns.update(req.body);
      return res.status(201).json(vitalSigns);
    } else {
      return res.status(404).json({ message: "Unable to find Vital Signs" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating vital signs" });
  }
};

// will delete  a patient's vital signs based on patient id and vital signs id
const deletePatientVitalSigns = async (req, res) => {
  try {
    const vitalSigns = await models.VitalSigns.findOne({
      where: { id: req.params.id, patient_id: req.params.patient_id },
    });
    if (vitalSigns != null) {
      await vitalSigns.destroy();
      return res.status(204).json(vitalSigns);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting vital signs" });
  }
};

module.exports = {
  getPatientVitalSigns,
  addPatientVitalSigns,
  updatePatientVitalSigns,
  deletePatientVitalSigns,
};
