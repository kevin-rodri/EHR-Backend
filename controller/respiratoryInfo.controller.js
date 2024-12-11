/*
Name: Kevin Rodriguez
Date: 12/10/24 
Description: Respiratory Info controller logic for any requests related to Respiratory Info assessments.
*/

const { models } = require("../models");

const getPatientRespiratoryInfo = async (req, res) => {
  try {
    const respiratoryInfo = await models.RespiratoryInfo.findOne({
      where: { assessment_id: req.params.assessment_id },
    });
    if (respiratoryInfo == null) {
      res.status(404).json({
        message: "Unable to find patient's respiratory info.",
      });
    }
    res.status(200).json(respiratoryInfo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving respiratory info" });
  }
};

const addPatientRespiratoryInfo = async (req, res) => {
  try {
    const respiratoryInfo = await models.RespiratoryInfo.create({
      ...req.body,
      assessment_id: req.params.assessment_id,
    });
    res.status(201).json(respiratoryInfo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating respiratory info" });
  }
};

const updatePatientRespiratoryInfo = async (req, res) => {
  try {
    const respiratoryInfo = await models.RespiratoryInfo.findByPk(
      req.params.id
    );

    if (respiratoryInfo == null) {
      return res.status(404).json({
        message: "Unable to find the patient's respiratory info",
      });
    } else {
      await respiratoryInfo.update({
        id: req.params.id,
        ...req.body,
        assessment_id: req.params.assessment_id,
        modified_date: new Date(),
      });
      return res.status(200).json(respiratoryInfo);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating respiratory info" });
  }
};

const deletePatientRespiratoryInfo = async (req, res) => {
  try {
    const respiratoryInfo = await models.RespiratoryInfo.findByPk(
      req.params.id
    );

    if (respiratoryInfo == null) {
      return res.status(404).json({
        message: "Unable to find the patient's respiratory info",
      });
    } else {
      await respiratoryInfo.destroy();
      return res.status(204).json(respiratoryInfo);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting respiratory info" });
  }
};

module.exports = {
  getPatientRespiratoryInfo,
  addPatientRespiratoryInfo,
  updatePatientRespiratoryInfo,
  deletePatientRespiratoryInfo,
};
