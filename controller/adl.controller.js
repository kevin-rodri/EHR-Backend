/*
Name: Gabby Pierce
Date: 12/7/2024
Description: Controller for handling ADL-related requests for patients.
*/

const { models } = require("../models");

const getPatientADL = async (req, res) => {
  try {
    const adlRecords = await models.ADL.findAll({
      where: {
        patient_id: req.params.patient_id,
      },
    });
    res.status(200).json(adlRecords);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addPatientADL = async (req, res) => {
  try {
    const newADL = await models.ADL.create({
      ...req.body,
      patient_id: req.params.patient_id,
    });
    res.status(201).json(newADL);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updatePatientADL = async (req, res) => {
  try {
    const adlRecord = await models.ADL.findOne({
      where: {
        patient_id: req.params.patient_id,
        id: req.params.id,
      },
    });

    if (adlRecord != null) {
      await adlRecord.update({
        ...req.body,
        modified_date: new Date(),
      });
      res.status(200).json(adlRecord);
    } else {
      res.status(404).json({ error: "ADL record not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deletePatientADL = async (req, res) => {
  try {
    const adlRecord = await models.ADL.findOne({
      where: {
        patient_id: req.params.patient_id,
        id: req.params.id,
      },
    });

    if (adlRecord != null) {
      await adlRecord.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: "ADL record not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getPatientADL,
  addPatientADL,
  updatePatientADL,
  deletePatientADL,
};
