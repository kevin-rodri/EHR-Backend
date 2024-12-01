/* 
Name: Kevin Rodriguez
Date: 11/30/2024 
Description: Dialysis Info controller logic for any requests related to Dialysis Info (for Genitourinary Info).
*/

const { models } = require("../models");

// gets a patients dialysis info by the patient's genitourinary info id
const getDialysisInfo = async (req, res) => {
  try {
    const dialysisInfo = await models.DialysisInfo.findOne({
      where: { genitourinary_id: req.params.genitourinary_id },
    });

    if (dialysisInfo != null) {
      res.status(200).json(dialysisInfo);
    } else {
      return res
        .status(404)
        .json({ message: "Unable to find the patient's dialysis info" });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error finding the patient's dialysis info" });
  }
};

// adds new dialysis info record for a patient
const addDialysisInfo = async (req, res) => {
  try {
    const dialysisInfo = await models.DialysisInfo.create({
      ...req.body,
      genitourinary_id: req.params.genitourinary_id,
    });

    const genitourinaryInfo = await models.GenitourinaryInfo.findByPk(
        req.params.genitourinary_id
      );
      await genitourinaryInfo.update({ modified_date: new Date() });
      return res.status(200).json({
        dialysisInfo, 
        genitourinaryInfo: genitourinaryInfo
      });
      
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error in creating dialysis info" });
  }
};

// updates the patients dialysis info based on the genitourinary info id
const updateDialysisInfo = async (req, res) => {
  try {
    const dialysisInfo = await models.DialysisInfo.findByPk(req.params.id);

    if (dialysisInfo == null) {
      return res
        .status(404)
        .json({ message: "Unable to find the patient's dialysis info" });
    } else {
      await dialysisInfo.update({
        ...req.body,
        genitourinary_id: req.params.genitourinary_id
      });
      const genitourinaryInfo = await models.GenitourinaryInfo.findByPk(
        req.params.genitourinary_id
      );
      await genitourinaryInfo.update({ modified_date: new Date() });
      return res.status(200).json({
        dialysisInfo, 
        genitourinaryInfo: genitourinaryInfo
      });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error updating the patient's dialysis info" });
  }
};

// deletes the patients dialysis info based on the genitourinary info id
const deleteDialysisInfo = async (req, res) => {
  try {
    const dialysisInfo = await models.DialysisInfo.findByPk(req.params.id); 

    if (dialysisInfo != null) {
      await dialysisInfo.destroy();
      return res.status(204).json(dialysisInfo);
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error deleting the patient's dialysis info" });
  }
};

module.exports = {
  getDialysisInfo,
  addDialysisInfo,
  updateDialysisInfo,
  deleteDialysisInfo,
};
