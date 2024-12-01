/* 
Name: Kevin Rodriguez
Date: 11/30/2024 
Description: Assessment controller logic for any requests related to patient assessments
Note: No Create or update for this as each respecitve assessment will have its own controller.
*/

const { models } = require("../models");

// gets patient assessment by patient id
const getPatientAssessment = async (req, res) => {
  try {
    const assessment = await models.Assessments.findOne({
      where: { patient_id: req.params.patient_id },
    });

    if (assessment == null) {
      res
        .status(404)
        .json({ message: "Unable to find an assessment for the patient." });
    }

    res.status(200).json(assessment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving assessment" });
  }
};

// Deletes all the assessments associated with a patient
const deletePatientAssessment = async (req, res) => {
  try {
    const assessment = await models.Assessments.findOne({
      where: { patient_id: req.params.patient_id },
    });

    if (assessment != null) {
      await assessment.destroy();
      res.status(200).json({ message: "All patient assessments deleted successfully." });
    } else {
      res.status(404).json({ message: "Unable to find an asssessment." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting assessment" });
  }
};

module.exports = {
  getPatientAssessment, 
  deletePatientAssessment
};
