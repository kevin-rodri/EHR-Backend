/*
Name: Kevin Rodriguez
Date: 12/10/24 
Description: Respiratory Info controller logic for any requests related to Respiratory Info assessments.
*/

const { models } = require("../models");

const getStudentRespiratoryInfo = async (req, res) => {
  try {
    const { section_patient_id } = req.params;

    const studentIds = await models.User.findAll({
      where: { role: "STUDENT" },
      attributes: ["id"],
      raw: true,
    });

    const studentIdList = studentIds.map((user) => user.id);

    if (!studentIdList.length) {
      return res
        .status(404)
        .json({ message: "No student records found for this section." });
    }

    const respiratoryInfo = await models.RespiratoryInfo.findAll({
      where: {
        section_patient_id,
        created_by: studentIdList,
      },
    });

    if (!respiratoryInfo.length) {
      return res.status(404).json({
        message: "No musculoskeletal records found for this section.",
      });
    }

    res.status(200).json(respiratoryInfo);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const getPatientRespiratoryInfo = async (req, res) => {
  try {
    const { id } = req.user;
    const respiratoryInfo = await models.RespiratoryInfo.findOne({
      where: {
        section_patient_id: req.params.section_patient_id,
        created_by: id,
      },
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
      section_patient_id: req.params.section_patient_id,
      created_by: req.user.id,
      created_date: new Date(),
      modified_by: req.user.id,
      modified_date: new Date(),
    });
    res.status(201).json(respiratoryInfo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating respiratory info" });
  }
};

const updatePatientRespiratoryInfo = async (req, res) => {
  try {
    const respiratoryInfo = await models.RespiratoryInfo.findOne({
      where: {
        section_patient_id: req.params.section_patient_id,
        id: req.params.id,
      },
    });

    if (respiratoryInfo == null) {
      return res.status(404).json({
        message: "Unable to find the patient's respiratory info",
      });
    } else {
      await respiratoryInfo.update({
        id: req.params.id,
        ...req.body,
        section_patient_id: req.params.section_patient_id,
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
    const respiratoryInfo = await models.RespiratoryInfo.findOne({
      where: {
        section_patient_id: req.params.section_patient_id,
        id: req.params.id,
      },
    });

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
  getStudentRespiratoryInfo,
  getPatientRespiratoryInfo,
  addPatientRespiratoryInfo,
  updatePatientRespiratoryInfo,
  deletePatientRespiratoryInfo,
};
