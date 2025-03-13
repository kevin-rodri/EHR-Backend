/* 
Name: Dylan Bellinger
Date: 12/7/2024 
Description: Gastrointestinal Info controller for related requests.
*/
const { models } = require("../models");

const getStudentGastrointestinalInfo = async (req, res) => {
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
    const gastrointestinalInfo = await models.GastrointestinalInfo.findAll({
      where: {
        section_patient_id,
        created_by: studentIdList,
      },
    });

    if (!gastrointestinalInfo.length) {
      return res.status(404).json({
        message: "No Gastrointestinal info records found for this section.",
      });
    }

    res.status(200).json(gastrointestinalInfo);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving gastrointestinal info" });
  }
};

const getPatientGastrointestinalInfo = async (req, res) => {
  try {
    const { id } = req.user;
    const gastrointestinalInfo = await models.GastrointestinalInfo.findOne({
      where: {
        section_patient_id: req.params.section_patient_id,
        created_by: id,
      },
    });
    if (gastrointestinalInfo == null) {
      res.status(404).json({
        message: "Unable to find patient's gastrointestinal info.",
      });
    }
    res.status(200).json(gastrointestinalInfo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving gastrointestinal info" });
  }
};

const addPatientGastrointestinalInfo = async (req, res) => {
  try {
    const gastrointestinalInfo = await models.GastrointestinalInfo.create({
      ...req.body,
      section_patient_id: req.params.section_patient_id,
      created_by: req.user.id,
      created_date: new Date(),
      modified_by: req.user.id,
      modified_date: new Date(),
    });
    res.status(201).json(gastrointestinalInfo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating gastrointestinal info" });
  }
};

const updatePatientGastrointestinalInfo = async (req, res) => {
  try {
    const gastrointestinalInfo = await models.GastrointestinalInfo.findOne({
      where: {
        section_patient_id: req.params.section_patient_id,
        id: req.params.id,
      },
    });

    if (gastrointestinalInfo == null) {
      return res.status(404).json({
        message: "Unable to find the patient's gastrointestinal info",
      });
    } else {
      await gastrointestinalInfo.update({
        id: req.params.id,
        ...req.body,
        section_patient_id: req.params.section_patient_id,
        modified_date: new Date(),
      });
      return res.status(200).json(gastrointestinalInfo);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating gastrointestinal info" });
  }
};

const deletePatientGastrointestinalInfo = async (req, res) => {
  try {
    const gastrointestinalInfo = await models.GastrointestinalInfo.findOne({
      where: {
        section_patient_id: req.params.section_patient_id,
        id: req.params.id,
      },
    });
    if (gastrointestinalInfo == null) {
      return res.status(404).json({
        message: "Unable to find the patient's gastrointestinal info.",
      });
    } else {
      await gastrointestinalInfo.destroy();
      return res.status(204).json(gastrointestinalInfo);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting gastrointestinal info" });
  }
};

module.exports = {
  getStudentGastrointestinalInfo,
  getPatientGastrointestinalInfo,
  addPatientGastrointestinalInfo,
  updatePatientGastrointestinalInfo,
  deletePatientGastrointestinalInfo,
};
