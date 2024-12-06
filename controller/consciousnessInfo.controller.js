/* 
Name: Kevin Rodriguez 
Date: 12/05/24
Description: Consciousness Info controller logic for any requests related to Consciousness Info (for Neurological Info).
*/

const { models } = require("../models");

// gets the patient consciousness info by and neurological id of the patient
const getConsciousnessInfo = async (req, res) => {
  try {
    const consciousnessInfo = await models.ConsciousnessInfo.findOne({
      where: { neurological_id: req.params.neurological_id },
    });

    if (consciousnessInfo != null) {
      res.status(200).json(consciousnessInfo);
    } else {
      return res.status(404).json({
        message: "Unable to find the patient's consciousness info details",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving consciousness info" });
  }
};

// creates a new consciousness info record for a patient
const addConsciousnessInfo = async (req, res) => {
  try {
    const consciousnessInfo = await models.ConsciousnessInfo.create({
      ...req.body,
      neurological_id: req.params.neurological_id,
    });
    const neurologicalInfo = await models.NeurologicalInfo.findByPk(
      req.params.neurological_id
    );
    await neurologicalInfo.update({ modified_date: new Date() });
    res.status(201).json(consciousnessInfo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating consciousness info" });
  }
};

// updates a patient's consciousness info based on the neurological info id
const updateConnsciousnessInfo = async (req, res) => {
  try {
    const consciousnessInfo = await models.ConsciousnessInfo.findByPk(
      req.params.id
    );
    if (consciousnessInfo == null) {
      return res.status(404).json({
        message: "Unable to find the patient's consciousness info",
      });
    } else {
      await consciousnessInfo.update({
        id: req.params.id,
        ...req.body,
        neurological_id: req.params.neurological_id,
      });
      const neurologicalInfo = await models.NeurologicalInfo.findByPk(
        req.params.neurological_id
      );
      await neurologicalInfo.update({ modified_date: new Date() });
      return res.status(200).json(consciousnessInfo);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating consciousness info" });
  }
};

// delete a patient's consciousness info
const deleteConciousnessInfo = async (req, res) => {
  try {
    const consciousnessInfo = await models.ConsciousnessInfo.findByPk(
      req.params.id
    );

    if (consciousnessInfo != null) {
      await consciousnessInfo.destroy();
      res.status(204).json(consciousnessInfo);
    } else {
      return res.status(404).json({
        message: "Unable to find the patient's consciousness info",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error trying to delete the patient's consciousness info",
    });
  }
};

module.exports = {
  getConsciousnessInfo,
  addConsciousnessInfo,
  updateConnsciousnessInfo,
  deleteConciousnessInfo,
};
