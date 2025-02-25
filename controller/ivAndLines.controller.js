/* 
Name: Dylan Bellinger
Date: 12/5/2024 
Description: IV and Lines controller for related requests.
*/
const { models } = require("../models");

const getPatientIVLines = async (req, res) => {
  try {
    const { role, id } = req.user;
    let ivLines;

    if (role === "STUDENT") {
    ivLines = await models.IV_and_Lines.findAll({
        where: {
          section_patient_id: req.params.section_patient_id,
          created_by: id,
        },
      });
    } else if (role === "INSTRUCTOR" || role === "ADMIN") {
        ivLines = await models.IV_and_Lines.findAll({
            where: {
              section_patient_id: req.params.section_patient_id
            },
          });
    } else {
      return res.status(403).json({ error: "Unable to access resource" });
    }
    res.status(200).json(ivLines);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addPatientIVLines = async (req, res) => {
  try {
    const ivLines = await models.IV_and_Lines.create({
      ...req.body,
      section_patient_id: req.params.section_patient_id,
      created_by: req.user.id,
      created_date: new Date(),
      modified_by: req.user.id,
      modified_date: new Date(),
    });
    res.status(201).json(ivLines);
  } catch (error) {
    res.status(500).json({ message: "Error creating IV and Lines record" });
  }
};

const updatePatientIVLines = async (req, res) => {
  try {
    const ivLines = await models.IV_and_Lines.findOne({
      where: {
        section_patient_id: req.params.section_patient_id,
        id: req.params.id,
      },
    });
    if (ivLines != null) {
      await ivLines.update({
        ...req.body,
        modified_by: req.user.id,
        modified_date: new Date(),
      });
      res.status(201).json(ivLines);
    } else {
      res.status(404).json({ error: "IV and Lines record not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating IV and Lines record" });
  }
};

const deletePatientIVLines = async (req, res) => {
  try {
    const ivLines = await models.IV_and_Lines.findOne({
      where: {
        section_patient_id: req.params.section_patient_id,
        id: req.params.id,
      },
    });

    if (ivLines != null) {
      await ivLines.destroy();
      res.status(204).json(ivLines);
    } else {
      res.status(404).json({ error: "IV and Lines record not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting IV and Lines record" });
  }
};

module.exports = {
  getPatientIVLines,
  addPatientIVLines,
  updatePatientIVLines,
  deletePatientIVLines,
};
