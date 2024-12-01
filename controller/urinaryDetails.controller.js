/* 
Name: Kevin Rodriguez
Date: 11/30/2024 
Description: Urinary Details controller logic for any requests related to Urinary Details (for Genitourinary Info).
*/

const { models } = require("../models");

// get a patient's urinary details by the patien't genitourinary info id
const getUrinaryDetails = async (req, res) => {
  try {
    const urinaryDetails = await models.UrinaryDetails.findOne({
      where: { genitourinary_id: req.params.genitourinary_id },
    });

    if (urinaryDetails != null) {
      res.status(200).json(urinaryDetails);
    } else {
      return res
        .status(404)
        .json({ message: "Unable to find the patient's urinary details" });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error finding the patient's urinary details" });
  }
};

// creates new urinary details record for a patient
const addUrinaryDetails = async (req, res) => {
  try {
    const urinaryDetails = await models.UrinaryDetails.create({
      ...req.body,
      genitourinary_id: req.params.genitourinary_id,
    });
    const genitourinaryInfo = await models.GenitourinaryInfo.findByPk(
      req.params.genitourinary_id
    );
    await genitourinaryInfo.update({ modified_date: new Date() });
    return res.status(201).json({
      urinaryDetails
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error in creating urinary details" });
  }
};

// updates a patient's urinary details based on the genitourinary info id
const updateUrinaryDetails = async (req, res) => {
  try {
    const urinaryDetails = await models.UrinaryDetails.findByPk(req.params.id);

    if (urinaryDetails == null) {
      return res
        .status(404)
        .json({ message: "Unable to find the patient's urinary details" });
    } else {
      await urinaryDetails.update({
        ...req.body,
        genitourinary_id: req.params.genitourinary_id,
      });
      const genitourinaryInfo = await models.GenitourinaryInfo.findByPk(
        req.params.genitourinary_id
      );
      await genitourinaryInfo.update({ modified_date: new Date() });
      return res.status(200).json({
        urinaryDetails
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error trying to update the patient's urinary details",
    });
  }
};

// delete a patient's urinary details
const deleteUrinaryDetails = async (req, res) => {
  try {
    const urinaryDetails = await models.UrinaryDetails.findByPk(req.params.id);
    if (urinaryDetails != null) {
      await urinaryDetails.destroy();
      return res.status(204).json(urinaryDetails);
    } else {
      return res
        .status(404)
        .json({ message: "Unable to find the patient's urinary details" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error trying to delete the patient's urinary details",
    });
  }
};

module.exports = {
  getUrinaryDetails,
  addUrinaryDetails,
  updateUrinaryDetails,
  deleteUrinaryDetails,
};
