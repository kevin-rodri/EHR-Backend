/* 
Name: Kevin Rodriguez
Date: 1/20/25
Description: Section Roster controller that handles section roster-related requests.
Also, per the bcrypt documentation: https://www.npmjs.com/package/bcrypt
*/

const { models } = require("../models");

const getSectionRoster = async (req, res) => {
  try {
    const sectionRoster = await models.SectionRoster.findOne({
      where: { section_id: req.params.section_id },
    });
    res.status(200).json(sectionRoster);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createSectionRoster = async (req, res) => {
  try {
    const sectionRoster = await models.SectionRoster.create({...req.body, section_id: req.params.section_id});
    res.status(201).json(sectionRoster);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateSectionRoster = async (req, res) => {
  try {
    const sectionRoster = await models.SectionRoster.findByPk(req.params.id);
    if (sectionRoster != null) {
      await sectionRoster.update({
        id: req.params.id,
        ...req.body,
      });
      res.status(200).json(sectionRoster);
    } else {
      res.status(404).json({ error: "Section Roster not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const deleteSectionRoster = async (req, res) => {
  try {
    const sectionRoster = await models.SectionRoster.findByPk(req.params.id);
    if (sectionRoster != null) {
      await sectionRoster.destroy();
      res.status(204).json(sectionRoster);
    } else {
      res.status(404).json({ error: "Section Roster not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getSectionRoster,
  createSectionRoster,
  updateSectionRoster,
  deleteSectionRoster,
};