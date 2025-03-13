/* 
Name: Dylan Bellinger
Date: 12/8/2024 
Description: Musculoskeletal Info controller for related requests.
*/
const { models } = require("../models");

const getStudentMusculoskeletalInfo = async (req, res) => {
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

    const musculoskeletalInfo = await models.MusculoskeletalInfo.findAll({
      where: {
        section_patient_id,
        created_by: studentIdList,
      },
    });

    if (!musculoskeletalInfo.length) {
      return res
        .status(404)
        .json({
          message: "No musculoskeletal records found for this section.",
        });
    }

    res.status(200).json(musculoskeletalInfo);
  } catch (error) {
    console.error("Error retrieving musculoskeletal info:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getPatientMusculoskeletalInfo = async (req, res) => {
  try {
    const { id } = req.user;
    const musculoskeletalInfo = await models.MusculoskeletalInfo.findOne({
      where: {
        section_patient_id: req.params.section_patient_id,
        created_by: id,
      },
    });
    if (musculoskeletalInfo == null) {
      res.status(404).json({
        message: "Unable to find patient's musculoskeletal info.",
      });
    }
    res.status(200).json(musculoskeletalInfo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving musculoskeletal info" });
  }
};

const addPatientMusculoskeletalInfo = async (req, res) => {
  try {
    const musculoskeletalInfo = await models.MusculoskeletalInfo.create({
      ...req.body,
      section_patient_id: req.params.section_patient_id,
      created_by: req.user.id,
      created_date: new Date(),
      modified_by: req.user.id,
      modified_date: new Date(),
    });
    res.status(201).json(musculoskeletalInfo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating musculoskeletal info" });
  }
};

const updatePatientMusculoskeletalInfo = async (req, res) => {
  try {
    const musculoskeletalInfo = await models.MusculoskeletalInfo.findOne({
      where: {
        section_patient_id: req.params.section_patient_id,
        id: req.params.id,
      },
    });

    if (musculoskeletalInfo == null) {
      return res.status(404).json({
        message: "Unable to find the patient's musculoskeletal info",
      });
    } else {
      await musculoskeletalInfo.update({
        id: req.params.id,
        ...req.body,
        section_patient_id: req.params.section_patient_id,
        modified_date: new Date(),
      });
      return res.status(200).json(musculoskeletalInfo);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating musculoskeletal info" });
  }
};

const deletePatientMusculoskeletalInfo = async (req, res) => {
  try {
    const musculoskeletalInfo = await models.MusculoskeletalInfo.findOne({
      where: {
        section_patient_id: req.params.section_patient_id,
        id: req.params.id,
      },
    });
    if (musculoskeletalInfo == null) {
      return res.status(404).json({
        message: "Unable to find the patient's musculoskeletal info.",
      });
    } else {
      await musculoskeletalInfo.destroy();
      return res.status(204).json(musculoskeletalInfo);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting musculoskeletal info" });
  }
};

module.exports = {
  getStudentMusculoskeletalInfo,
  getPatientMusculoskeletalInfo,
  addPatientMusculoskeletalInfo,
  updatePatientMusculoskeletalInfo,
  deletePatientMusculoskeletalInfo,
};
