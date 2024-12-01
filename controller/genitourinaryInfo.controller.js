/* 
Name: Kevin Rodriguez
Date: 11/30/2024 
Description: Genitournary Info controller logic for any requests related to Genitournary Info assessments.
*/

const { models } = require("../models");

// gets patient genitourinary info by patient and assessment id
const getPatientGenitourinaryInfo = async (req, res) => {
  try {
    const genitourinaryInfo = await models.GenitourinaryInfo.findOne({
        where: { assessment_id: req.params.assessment_id },
    })

    if (genitourinaryInfo == null) {
      res.status(404).json({
        message: "Unable to find genitourinary info for the patient.",
      });
    }
    res.status(200).json(genitourinaryInfo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving genitourinary info" });
  }
};

// creates new genitourinary info record for a patient
const addPatientGenitourinaryInfo = async (req, res) => {
  try {
    const genitourinaryInfo = await models.GenitourinaryInfo.create({
      ...req.body,
      assessment_id: req.params.assessment_id,
    });
    res.status(201).json(genitourinaryInfo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating genitourinary info" });
  }
};

// updates a patient's genitourinary info based on the assessment id
const updatePatientGenitourinaryInfo = async (req, res) => {
  try {
    const genitourinaryInfo = await models.GenitourinaryInfo.findByPk(
      req.params.id
    );

    if (genitourinaryInfo == null) {
      return res.status(404).json({
        message: "Unable to find the patient's genitourinary assessment",
      });
    } else {
      await genitourinaryInfo.update({
        id: req.params.id,
        ...req.body,
        assessment_id: req.params.assessment_id,
        modified_date: new Date(),
      });
      return res.status(200).json(genitourinaryInfo);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating genitourinary info" });
  }
};

// now let's delete the patient's genitourinary info based on the assessment id
const deletePatientGenitourinaryInfo = async (req, res) => {
  try {
    const genitourinaryInfo = await models.GenitourinaryInfo.findByPk(
      req.params.id
    );
    if (genitourinaryInfo != null) {
      await genitourinaryInfo.destroy();
      return res.status(204).json(genitourinaryInfo);
    } else {
      return res
        .status(404)
        .json({ message: "Unable to find the patient's genitourinary info" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Unable to successfully delete a patient's genitourinary info",
    });
  }
};

module.exports = {
  getPatientGenitourinaryInfo,
  addPatientGenitourinaryInfo,
  updatePatientGenitourinaryInfo,
  deletePatientGenitourinaryInfo,
};
