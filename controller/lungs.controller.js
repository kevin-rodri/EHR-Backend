/* 
Name: Kevin Rodriguez
Date: 12/11/2024
Description: Lungs controller logic for any requests related to Respiratory assessments.
*/

const { models } = require("../models");

const getLungsInfo = async (req, res) => {
  try {
    const lungsInfo = await models.Lungs.findOne({
      where: { respiratory_id: req.params.respiratory_id },
    });
    if (lungsInfo == null) {
      res.status(404).json({
        message: "Unable to find the patients patient's lungs info.",
      });
    }
    res.status(200).json(lungsInfo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving lungs info" });
  }
};

const addLungsInfo = async (req, res) => {
  try {
    const lungsInfo = await models.Lungs.create({
      ...req.body,
      respiratory_id: req.params.respiratory_id,
    });
    const respiratoryInfo = await models.RespiratoryInfo.findByPk(
      req.params.respiratory_id
    );
    await respiratoryInfo.update({ modified_date: new Date() });
    res.status(201).json(lungsInfo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating lungs info" });
  }
};

const updateLungsInfo = async (req, res) => {
  try {
    const lungsInfo = await models.Lungs.findByPk(req.params.id);

    if (lungsInfo == null) {
      return res.status(404).json({
        message: "Unable to find the patient's lungs info",
      });
    } else {
      await lungsInfo.update({
        id: req.params.id,
        ...req.body,
        respiratory_id: req.params.respiratory_id,
        modified_date: new Date(),
      });
      const respiratoryInfo = await models.RespiratoryInfo.findByPk(
        req.params.respiratory_id
      );
      await respiratoryInfo.update({ modified_date: new Date() });
      return res.status(200).json(lungsInfo);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating lungs info" });
  }
};

const deleteLungsInfo = async (req, res) => {
  try {
    const lungsInfo = await models.Lungs.findByPk(req.params.id);
    if (lungsInfo == null) {
      return res.status(404).json({
        message: "Unable to find the patient's lungs info.",
      });
    }
    await lungsInfo.destroy();
    res.status(204).json(lungsInfo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting lungs info" });
  }
};

module.exports = {
  getLungsInfo,
  addLungsInfo,
  updateLungsInfo,
  deleteLungsInfo,
};
