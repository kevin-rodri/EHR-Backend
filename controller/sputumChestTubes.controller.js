/*
Name: Kevin Rodriguez
Date: 12/11/2024
Description: Sputum Chest Tubes controller logic for any requests related to Respiratory assessments.
*/

const { models } = require("../models");

const getSputumChestTubes = async (req, res) => {
  try {
    const sputumChestTubes = await models.SputumChestTubes.findOne({
      where: { respiratory_id: req.params.respiratory_id },
    });
    if (sputumChestTubes == null) {
      res.status(404).json({
        message:
          "Unable to find the patients patient's sputum chest tubes info.",
      });
    }
    res.status(200).json(sputumChestTubes);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error retrieving sputum chest tubes info" });
  }
};

const addSputumChestTubes = async (req, res) => {
  try {
    const sputumChestTubes = await models.SputumChestTubes.create({
      ...req.body,
      respiratory_id: req.params.respiratory_id,
    });
    const respiratoryInfo = await models.RespiratoryInfo.findByPk(
      req.params.respiratory_id
    );
    await respiratoryInfo.update({ modified_date: new Date() });
    res.status(201).json(sputumChestTubes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating sputum chest tubes info" });
  }
};

const updateSputumChestTubes = async (req, res) => {
  try {
    const sputumChestTubes = await models.SputumChestTubes.findByPk(
      req.params.id
    );

    if (sputumChestTubes == null) {
      return res.status(404).json({
        message: "Unable to find the patient's sputum chest tubes info",
      });
    } else {
      await sputumChestTubes.update({
        ...req.body,
        respiratory_id: req.params.respiratory_id,
      });
      const respiratoryInfo = await models.RespiratoryInfo.findByPk(
        req.params.respiratory_id
      );
      await respiratoryInfo.update({ modified_date: new Date() });
      return res.status(200).json(sputumChestTubes);
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error updating patients sputum chest tubes info" });
  }
};

const deleteSputumChestTubes = async (req, res) => {
  try {
    const sputumChestTubes = await models.SputumChestTubes.findByPk(
      req.params.id
    );
    if (sputumChestTubes == null) {
      return res.status(404).json({
        message: "Unable to find the patient's sputum chest tubes info.",
      });
    }
    await sputumChestTubes.destroy();
    res
      .status(204)
      .json(sputumChestTubes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting sputum chest tubes info" });
  }
};

module.exports = {
  getSputumChestTubes,
  addSputumChestTubes,
  updateSputumChestTubes,
  deleteSputumChestTubes,
};
