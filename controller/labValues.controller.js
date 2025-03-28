/* 
Name: Charlize Aponte
Date: 12/7/2024 
Description: Lab Values controller that handles CRUD operations.
Source for adding where clauses: https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
*/

const { models } = require("../models");

// GET /patients/{patientId}/lab-values - Get lab values for a patient
/*
For educational purposes, this is an example response: 
[
  {
    "section_patient_id": "abc",
    "created_by": "user_1",
    "created_date": "2024-03-12T10:00:00Z",
    "modified_by": "user_2",
    "modified_date": "2024-03-12T12:00:00Z",
    "lab_values": [
      { "element_name": "WBC", "element_value": 5 },
      { "element_name": "RBC", "element_value": 4 }
    ]
  },
  {
    "section_patient_id": "def",
    "created_by": "user_3",
    "created_date": "2024-03-13T11:00:00Z",
    "modified_by": "user_4",
    "modified_date": "2024-03-13T13:00:00Z",
    "lab_values": [
      { "element_name": "Platelets", "element_value": 250 },
      { "element_name": "Hemoglobin", "element_value": 13 }
    ]
  }
]
The correct thing to do would be changing the schema by making another table that takes elements and their lab values. 
Then, this modal should associate it. Because of time, this band aid will do.
*/
const getPatientLabValues = async (req, res) => {
  try {
    const labValues = await models.LabValues.findAll({
      where: { section_patient_id: req.params.section_patient_id },
      raw: true,
    });

    if (!labValues.length) {
      return res
        .status(404)
        .json({ message: "No lab values found for this patient." });
    }

    const formattedData = labValues.reduce((acc, record) => {
      let patientEntry = acc.find(
        (entry) => entry.section_patient_id === record.section_patient_id
      );

      if (!patientEntry) {
        patientEntry = {
          section_patient_id: record.section_patient_id,
          created_by: record.created_by,
          created_date: record.created_date,
          modified_by: record.modified_by,
          modified_date: record.modified_date,
          lab_values: [],
        };
        acc.push(patientEntry);
      }

      patientEntry.lab_values.push({
        element_name: record.element_name,
        element_value: record.element_value,
      });

      return acc;
    }, []);

    res.status(200).json(formattedData);
  } catch (err) {
    console.error("Error retrieving lab values:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// POST /patients/{patientId}/lab-values - Add a new lab value
const addPatientLabValue = async (req, res) => {
  try {
    const labValue = await models.LabValues.create({
      ...req.body,
      section_patient_id: req.params.section_patient_id,
      created_by: req.user.id,
      created_date: new Date(),
      modified_by: req.user.id,
      modified_date: new Date(),
    });
    res.status(201).json(labValue);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT /patients/{patientId}/lab-values/{id} - Update a lab value
const updatePatientLabValue = async (req, res) => {
  try {
    const { section_patient_id, id } = req.params;

    const labValue = await models.LabValues.findOne({
      where: { section_patient_id, id },
    });

    if (labValue == null) {
      return res.status(404).json({ error: "Lab Value not found" });
    }

    const allowedUpdates = ["element_name", "element_value"];
    const updateData = {};

    for (const key of allowedUpdates) {
      if (req.body[key] !== undefined) {
        updateData[key] = req.body[key];
      }
    }

    updateData.modified_by = req.user.id;
    updateData.modified_date = new Date();

    // Apply updates
    await labValue.update(updateData);

    const updatedLabValue = await models.LabValues.findOne({ where: { id } });

    res.status(200).json(updatedLabValue);
  } catch (err) {
    console.error("Error updating lab value:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};


// DELETE /patients/{patientId}/lab-values/{id} - Delete a lab value
const deletePatientLabValue = async (req, res) => {
  try {
    const labValue = await models.LabValues.findOne({
      where: {
        section_patient_id: req.params.section_patient_id,
        id: req.params.id,
      },
    });

    if (labValue != null) {
      await labValue.destroy();
      res.status(204).json(labValue);
    } else {
      res.status(404).json({ error: "Lab Value not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getPatientLabValues,
  addPatientLabValue,
  updatePatientLabValue,
  deletePatientLabValue,
};
