/* 
Name: Kevin Rodriguez
Date: 11/4/2024 
Description: Section controller that handles section-related requests.
*/
const { models } = require("../models");

const getAllSections = async (req, res) => {
  try {
    const sections = await models.Section.findAll();
    res.status(200).json(sections);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getSectionById = async (req, res) => {
  try {
    const section = await models.Section.findByPk(req.params.id);
    res.status(200).json(section);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateSection = async (req, res) => {
  try {
    const section = await models.Section.findByPk(req.params.id);
    if (section != null) {
      await section.update(req.body);
      res.status(201).json(section);
    } else {
      res.status(404).json({ error: "Section not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createSection = async (req, res) => {
  try {
    const section = await models.Section.create(req.body);
    res.status(201).json(section);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteSection = async (req, res) => {
  try {
    const section = await models.Section.findByPk(req.params.id);
    if (section != null) {
      await section.destroy();
      res.status(204).json(section);
    } else {
      res.status(404).json({ error: "Section not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllSections,
  getSectionById,
  updateSection,
  createSection,
  deleteSection,
};