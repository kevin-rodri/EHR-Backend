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
        const sectionPatient = await models.SectionPatient.create({...req.body, section_id: req.params.section_id});
        res.status(201).json(sectionPatient);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

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
};