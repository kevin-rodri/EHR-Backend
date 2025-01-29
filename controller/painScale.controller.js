/*
Name: Charlize Aponte
Date: 1/25/2025
Description: Patn Scale for adding pain scales to the database.
Source for adding where clauses: https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
*/

const { models } = require("../models");

const getPainScales = async (req, res) => {
  try {
    const painScales = await models.PainScale.findAll();
    res.status(200).json(painScales);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getPainScaleById = async (req, res) => {
  try {
    const painScale = await models.PainScale.findByPk(req.params.id);
    if (painScale != null) {
      res.status(200).json(painScale);
    } else {
      res.status(404).json({ error: "Pain Scale not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addPainScale = async (req, res) => {
  try {
    const newPainScale = await models.PainScale.create(req.body);
    res.status(201).json(newPainScale);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updatePainScale = async (req, res) => {
  try {
    const painScale = await models.PainScale.findByPk(req.params.id);
    if (painScale != null) {
      await painScale.update({
        id: req.params.id,
        ...req.body,
      });
      res.status(200).json(painScale);
    } else {
      res.status(404).json({ error: "Pain Scale not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deletePainScale = async (req, res) => {
  try {
    const painScale = await models.PainScale.findByPk(req.params.id);

    if (painScale != null) {
      await painScale.destroy();
      res.status(200).json(painScale);
    } else {
      res.status(404).json({ error: "Pain Scale not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};  

module.exports = {
  getPainScales,
  getPainScaleById,
  addPainScale,
  updatePainScale,
  deletePainScale,
};