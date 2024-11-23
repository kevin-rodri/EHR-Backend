/* 
Name: Dylan Bellinger
Date: 11/23/2024 
Description: Intake controller for related requests.
*/
const { models } = require("../models");

const getPatientIntake = async(req, res) => {
    try {
        const intake = await models.Intake.findAll({where: { patient_id: req.params.patient_id}});
        res.status(200).json(intake);
    } catch (error) {
        res.status(500).json({message: "Error retrieving intake record"})
    }
};

const createPatientIntake = async(req, res) => {
    try {
        const intake = await models.Intake.create({
            ...req.body,
            patient_id: req.params.patient_id,
          });
          res.status(201).json(intake);
    } catch (error) {
        res.status(500).json({message: "Error creating intake record"});
    }
};


const updatePatientIntake = async (req, res) => {
    try {
      const intake = await models.Intake.findOne({
        where: {
          patient_id: req.params.patient_id,
          intake_id: req.params.intake_id,
        },
      });
      if (intake != null) {
        await intake.update({ ...req.body, date_and_time_taken: new Date() });
        res.status(201).json(intake);
      } else {
        res.status(404).json({ error: "Intake record not found" });
      }
    } catch (error) {
      res.status(500).json({message: "Error updating intake record"});
    }
  };
  
  const deletePatientIntake = async (req, res) => {
    try {
      const intake = await models.Intake.findOne({
        where: {
          patient_id: req.params.patient_id,
          intake_id: req.params.intake_id,
        },
      });
  
      if (intake != null) {
        await intake.destroy();
        res.status(204).json(intake);
      } else {
        res.status(404).json({ error: "Intake record not found" });
      }
    } catch (error) {
      res.status(500).json({message: "Error deleting intake record"});
    }
  };
  
  module.exports = {
    getPatientIntake,
    createPatientIntake,
    updatePatientIntake,
    deletePatientIntake,
  };