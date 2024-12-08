/* 
Name: Charlize Aponte
Date: 12/7/2024
Description: WALDO Diagram controller that handles requests.
Source for adding where clauses: https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
*/

const { models } = require("../models");

const getPatientWaldoDiagram = async (req, res) => {
  try {
    const waldoDiagram = await models.WALDO_Diagram.findAll({
      where: { patient_id: req.params.patient_id },
    });
    res.status(200).json(waldoDiagram);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addPatientWaldoDiagram = async (req, res) => {
  try {
    const waldoDiagram = await models.WALDO_Diagram.create({
      ...req.body,
      patient_id: req.params.patient_id,
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
        patient_id: req.params.patient_id,
        id: req.params.id,
      },
    });

    if (waldoDiagram) {
      await waldoDiagram.update({
        ...req.body,
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
        patient_id: req.params.patient_id,
        id: req.params.id,
      },
    });

    if (waldoDiagram) {
      await waldoDiagram.destroy();
      res.status(204).json({ message: "WALDO Diagram deleted" });
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
