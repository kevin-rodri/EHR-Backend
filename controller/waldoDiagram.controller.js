/* 
Name: Charlize Aponte
Date: 12/7/2024
Description: WALDO Diagram controller that handles requests.
Source for adding where clauses: https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
*/

const { models } = require("../models");

const getPatientWaldoDiagram = async (req, res) => {
  try {
    const waldoDiagrams = await models.WALDO_Diagram.findAll({
      where: { section_patient_id: req.params.section_patient_id, created_by: req.user.id },
    });
    res.status(200).json(waldoDiagrams);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addPatientWaldoDiagram = async (req, res) => {
  try {
    const waldoDiagram = await models.WALDO_Diagram.create({
      ...req.body,
      section_patient_id: req.params.section_patient_id,
      created_by: req.user.id,
      created_date: new Date(),
      modified_by: req.user.id,
      modified_date: new Date(),
    });
    res.status(201).json(waldoDiagram);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updatePatientWaldoDiagram = async (req, res) => {
  try {
    const waldoDiagram = await models.WALDO_Diagram.findOne({
      where: {
        section_patient_id: req.params.section_patient_id,
        id: req.params.id,
      },
    });

    if (waldoDiagram != null) {
      await waldoDiagram.update({
        ...req.body,
        modified_by: req.user.id,
        modified_date: new Date(),
      });
      res.status(200).json(waldoDiagram);
    } else {
      res.status(404).json({ error: "WALDO Diagram not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deletePatientWaldoDiagram = async (req, res) => {
  try {
    const waldoDiagram = await models.WALDO_Diagram.findOne({
      where: {
        section_patient_id: req.params.section_patient_id,
        id: req.params.id,
      },
    });

    if (waldoDiagram != null) {
      await waldoDiagram.destroy();
      res.status(204).json(waldoDiagram);
    } else {
      res.status(404).json({ error: "WALDO Diagram not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getPatientWaldoDiagram,
  addPatientWaldoDiagram,
  updatePatientWaldoDiagram,
  deletePatientWaldoDiagram,
};