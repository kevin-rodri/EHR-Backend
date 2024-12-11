/*
Name: Kevin Rodriguez
Date: 12/11/2024
Description: Oxygen Support controller logic for any requests related to Respiratory assessments.
*/

const { models } = require("../models");

const getOxygenSupport = async (req, res) => {
  try {
    const oxygenSupport = await models.OxygenSupport.findOne({
      where: { respiratory_id: req.params.respiratory_id },
    });
    if (oxygenSupport == null) {
      res.status(404).json({
        message: "Unable to find the patients patient's oxygen support info.",
      });
    }
    res.status(200).json(oxygenSupport);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving oxygen support info" });
  }
};

const addOxygenSupport = async (req, res) => {
  try {
    const oxygenSupport = await models.OxygenSupport.create({
      ...req.body,
      respiratory_id: req.params.respiratory_id,
    });
    const respiratoryInfo = await models.RespiratoryInfo.findByPk(
      req.params.respiratory_id
    );
    await respiratoryInfo.update({ modified_date: new Date() });
    res.status(201).json(oxygenSupport);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating oxygen support info" });
  }
};

const updateOxygenSupport = async (req, res) => {
  try {
    const oxygenSupport = await models.OxygenSupport.findByPk(req.params.id);

    if (oxygenSupport == null) {
      return res.status(404).json({
        message: "Unable to find the patient's oxygen support info",
      });
    } else {
      await oxygenSupport.update({
        id: req.params.id,
        ...req.body,
        respiratory_id: req.params.respiratory_id,
        modified_date: new Date(),
      });
      const respiratoryInfo = await models.RespiratoryInfo.findByPk(
        req.params.respiratory_id
      );
      await respiratoryInfo.update({ modified_date: new Date() });
      return res.status(200).json(oxygenSupport);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating oxygen support info" });
  }
};

const deleteOxygenSupport = async (req, res) => {
  try {
    const oxygenSupport = await models.OxygenSupport.findByPk(req.params.id);
    if (oxygenSupport == null) {
      return res.status(404).json({
        message: "Unable to find the patient's oxygen support info.",
      });
    }
    await oxygenSupport.destroy();
    res
      .status(204)
      .json(oxygenSupport);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting oxygen support info" });
  }
};

module.exports = {
  getOxygenSupport,
  addOxygenSupport,
  updateOxygenSupport,
  deleteOxygenSupport,
};
