/* 
Name: Kevin Rodriguez
Date: 12/05/2024 
Description: Pupil Info controller logic for any requests related to Pupil Info (for Neurological Info).
*/

const { models } = require("../models");

// gets the patient pupil info by and neurological id of the patient
const getPupilInfo = async (req, res) => {
  try {
    const pupilInfo = await models.PupilInfo.findOne({
      where: { neurological_id: req.params.neurological_id },
    });

    if (pupilInfo != null) {
      res.status(200).json(pupilInfo);
    } else {
      return res
        .status(404)
        .json({ message: "Unable to find the patient's pupil info details" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving pupil info" });
  }
};

// add a new pupil info record for a patient
const addPupilInfo = async (req, res) => {
  try {
    const pupilInfo = await models.PupilInfo.create({
      ...req.body,
      neurological_id: req.params.neurological_id,
    });
    const neurologicalInfo = await models.NeurologicalInfo.findByPk(
      req.params.neurological_id
    );
    await neurologicalInfo.update({ modified_date: new Date() });
    res.status(201).json(pupilInfo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating pupil info" });
  }
};

// updates a patient's pupil info based on the neurological id
const updatePupilInfo = async (req, res) => {
  try {
    const pupilInfo = await models.PupilInfo.findByPk(req.params.id);
    if (pupilInfo == null) {
      return res
        .status(404)
        .json({ message: "Unable to find the patient's pupil info" });
    } else {
      await pupilInfo.update({
        id: req.params.id,
        ...req.body,
        neurological_id: req.params.neurological_id,
      });
      const neurologicalInfo = await models.NeurologicalInfo.findByPk(
        req.params.neurological_id
      );
      await neurologicalInfo.update({ modified_date: new Date() });
      return res.status(200).json(pupilInfo);
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error updating the patient's pupil info" });
  }
};

// deletes the patient's pupil info based on the id
const deletePupilInfo = async (req, res) => {
  try {
    const pupilInfo = await models.PupilInfo.findByPk(req.params.id);

    if (pupilInfo != null) {
      await pupilInfo.destroy();
      return res.status(204).json({ message: "Pupil info deleted" });
    } else {
      return res
        .status(404)
        .json({ message: "Unable to find the patient's pupil info" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting pupil info" });
  }
};

module.exports = {
  getPupilInfo,
  addPupilInfo,
  updatePupilInfo,
  deletePupilInfo,
};
