/* 
Name: Kevin Rodriguez
Date: 11/27/2024 
Description: Vital Signs controller logic for any requests related to vital signs.
*/
const { models } = require("../models");

const { models } = require("../models");

// gets patient vital signs by section_patient_id
const getPatientVitalSigns = async (req, res) => {
  try {
    const { section_patient_id } = req.params;
    const { role, id } = req.user;

    let vitalSigns;

    if (role === "STUDENT") {
      vitalSigns = await models.VitalSigns.findAll({
        where: { section_patient_id, created_by: id },
      });
    } else if (role === "INSTRUCTOR" || role === "ADMIN") {
      vitalSigns = await models.VitalSigns.findAll({
        where: { section_patient_id },
      });
    } else {
      return res.status(403).json({ message: "Access denied" });
    }

    res.status(200).json(vitalSigns);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving vital signs" });
  }
};

const addPatientVitalSigns = async (req, res) => {
  try {
    const { section_patient_id } = req.params;
    const vitalSigns = await models.VitalSigns.create({
      ...req.body,
      section_patient_id,
      created_by: req.user.id,
      created_date: new Date(),
      modified_by: req.user.id,
      modified_date: new Date(),
    });
    res.status(201).json(vitalSigns);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating vital signs" });
  }
};

const updatePatientVitalSigns = async (req, res) => {
  try {
    const { section_patient_id, id } = req.params;

    const vitalSigns = await models.VitalSigns.findOne({
      where: { id, section_patient_id },
    });

    if (vitalSigns != null) {
      await vitalSigns.update({
        ...req.body,
        modified_by: req.user.id,
        modified_date: new Date(),
      });
      return res.status(200).json(vitalSigns);
    } else {
      return res.status(404).json({ message: "Vital Signs not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating vital signs" });
  }
};

const deletePatientVitalSigns = async (req, res) => {
  try {
    const { section_patient_id, id } = req.params;

    const vitalSigns = await models.VitalSigns.findOne({
      where: { id, section_patient_id },
    });

    if (vitalSigns != null) {
      await vitalSigns.destroy();
      return res.status(204).json(vitalSigns);
    } else {
      return res.status(404).json({ message: "Vital Signs not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting vital signs" });
  }
};

module.exports = {
  getPatientVitalSigns,
  addPatientVitalSigns,
  updatePatientVitalSigns,
  deletePatientVitalSigns,
};
