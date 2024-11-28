/* 
Name: Kevin Rodriguez
Date: 11/27/2024 
Description: Patient Pain Scale controller logic for any requests related to the patient pain scale.
*/

const { models } = require("../models");

// get a patient scale for a patient
const getPatientPainScale = async (req, res) => {
  try {
    const vitalSigns = await models.VitalSigns.findOne({
        where: {
          patient_id: req.params.patient_id,
          patient_pain_scale_id: req.params.id,
        },
      });
      if (vitalSigns == null) {
        return res
          .status(404)
          .json({ message: "Unable to find the pain scale for a patient" });
        }
      const painScale = await models.PatientPainScale.findOne({
        where: { id: vitalSigns.patient_pain_scale_id }
      });
      
    res.status(200).json(painScale);
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
    const painScale = await models.PatientPainScale.create(req.body);
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
    const vitalSigns = await models.VitalSigns.findOne({
      where: {
        patient_id: req.params.patient_id,
        patient_pain_scale_id: req.params.id,
      }
    });
    const painScale = await models.PatientPainScale.findByPk(
      vitalSigns.patient_pain_scale_id
    );
    if (painScale != null && vitalSigns != null) {
      await painScale.update(req.body);
      return res.status(200).json(painScale);
    } else {
      return res
        .status(404)
        .json({ message: "Unable to find the pain scale for a patient" });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error updating the pain scale for a patient" });
  }
};

module.exports = {
  getPatientPainScale,
  addPatientPainScale,
  updatePatientPainScale,
};
