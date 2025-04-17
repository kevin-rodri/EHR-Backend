/* 
Name: Kevin Rodriguez
Date: 1/20/25
Description: Section Patient controller that handles section patient-related requests.
*/

const { models } = require("../models");

const getSectionPatient = async (req, res) => {
  try {
    const sectionPatient = await models.SectionPatient.findOne({
      where: { section_id: req.params.section_id },
    });
    res.status(200).json(sectionPatient);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addPatientToSection = async (req, res) => {
  try {
    const sectionPatient = await models.SectionPatient.create({
      ...req.body,
      section_id: req.params.section_id,
    });
    res.status(201).json(sectionPatient);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateSectionPatient = async (req, res) => {
  try {
    const sectionPatient = await models.SectionPatient.findByPk(req.params.id);
    if (sectionPatient != null) {
      await sectionPatient.update({
        id: req.params.id,
        ...req.body,
      });
      res.status(200).json(sectionPatient);
    } else {
      res.status(404).json({ error: "Section Patient not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const scanPatient = async (req, res) => {
  try {
    const { barcode_value } = req.body;
    const { id } = req.params;

    if (!barcode_value) {
      return res
        .status(400)
        .json({ error: "Missing barcode_value in request body." });
    }

    const sectionPatient = await models.SectionPatient.findByPk(id);

    if (!sectionPatient) {
      return res.status(404).json({ error: "Section Patient not found." });
    }

    const patient = await models.Patient.findOne({
      where: { barcode_value },
    });

    if (!patient) {
      return res
        .status(404)
        .json({ error: "No patient found with the given barcode." });
    }

    const isCorrectPatient = patient.id === sectionPatient.patient_id;

    if (isCorrectPatient) {
      return res.status(200).json({
        message: "Correct patient scanned.",
      });
    } else {
      return res.status(400).json({
        message: "Scanned patient does not match the expected patient.",
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteSectionPatient = async (req, res) => {
  try {
    const sectionPatient = await models.SectionPatient.findByPk(req.params.id);
    if (sectionPatient != null) {
      await sectionPatient.destroy();
      res.status(204).json(sectionPatient);
    } else {
      res.status(404).json({ error: "Section Patient not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getSectionPatient,
  addPatientToSection,
  updateSectionPatient,
  deleteSectionPatient,
  scanPatient,
};
