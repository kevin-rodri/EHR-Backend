/* 
Name: Dylan Bellinger
Date: 12/2/2024 
Description: Output controller for related requests.
*/
const { models } = require("../models");

const getPatientOutput = async (req, res) => {
    try {
      const output = await models.Output.findAll({
        where: { patient_id: req.params.patient_id },
      });
      res.status(200).json(output);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving output record" });
    }
  };

  const addPatientOutput = async (req, res) => {
    try {
      const output = await models.Output.create({
        ...req.body,
        patient_id: req.params.patient_id,
      });
      res.status(201).json(output);
    } catch (error) {
      res.status(500).json({ message: "Error creating output record" });
    }
  };
  
  const updatePatientOutput = async (req, res) => {
    try {
      const output = await models.Output.findOne({
        where: {
          patient_id: req.params.patient_id,
          id: req.params.id,
        },
      });
      if (output != null) {
        await output.update({ ...req.body });
        res.status(201).json(output);
      } else {
        res.status(404).json({ error: "Output record not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error updating output record" });
    }
  };
  
  const deletePatientOutput = async (req, res) => {
    try {
      const output = await models.Output.findOne({
        where: {
          patient_id: req.params.patient_id,
          id: req.params.id,
        },
      });
  
      if (output != null) {
        await output.destroy();
        res.status(204).json(output);
      } else {
        res.status(404).json({ error: "Output record not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error deleting output record" });
    }
  };
  
  module.exports = {
    getPatientOutput,
    addPatientOutput,
    updatePatientOutput,
    deletePatientOutput,
  };
  