/* 
Name: Kevin Rodriguez 
Date: 12/05/24
Description: Strength Info controller logic for any requests related to Strength Info (for Neurological Info).
*/

const { models } = require("../models");

// gets the patent's strength infor by the patient's neurological id
const getStrengthInfo = async (req, res) => {
  try {
    const strengthInfo = await models.StrengthInfo.findOne({
      where: { neurological_id: req.params.neurological_id },
    });
    if (strengthInfo != null) {
      res.status(200).json(strengthInfo);
    } else {
      return res.status(404).json({
        message: "Unable to find the patient's strength info details",
      });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error finding the patient's strength info" });
  }
};

// creates a new strength info record for a patient
const addStrengthInfo = async (req, res) => {
  try {
    const strengthInfo = await models.StrengthInfo.create({
      ...req.body,
      neurological_id: req.params.neurological_id,
    });
    const neurologicalInfo = await models.NeurologicalInfo.findByPk(
      req.params.neurological_id
    );
    await neurologicalInfo.update({ modified_date: new Date() });
    res.status(201).json(strengthInfo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error in creating strength info" });
  }
};

// updates a patient's strength info based on the neurological info id
const updateStrengthInfo = async (req, res) => {
  try {
    const strengthInfo = await models.StrengthInfo.findByPk(req.params.id);
    if (strengthInfo == null) {
      return res.status(404).json({
        message: "Unable to find the patient's strength info",
      });
    } else {
      await strengthInfo.update({
        id: req.params.id,
        ...req.body,
        neurological_id: req.params.neurological_id,
      });
      const neurologicalInfo = await models.NeurologicalInfo.findByPk(
        req.params.neurological_id
      );
      await neurologicalInfo.update({ modified_date: new Date() });
      return res.status(200).json(strengthInfo);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating strength info" });
  }
};

// deletes the patient's strength info based on the neurological info id
const deleteStrengthInfo = async (req, res) => {
  try {
    const urinaryDetails = await models.StrengthInfo.findByPk(req.params.id);
    if (urinaryDetails != null) {
      await urinaryDetails.destroy();
      res.status(204).json(urinaryDetails);
    } else {
      return res
        .status(404)
        .json({ message: "Unable to find the patient's strength info" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error trying to delete the patient's strength info",
    });
  }
};

module.exports = {
  getStrengthInfo,
  addStrengthInfo,
  updateStrengthInfo,
  deleteStrengthInfo,
};
