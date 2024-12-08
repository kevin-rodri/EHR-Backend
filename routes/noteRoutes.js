/*
Name: Gabby Pierce
Date: 12/1/2024
Description: Routes file that establishes all the endpoints for managing notes related to patients.
*/

const express = require("express");
const router = express.Router();
const {
  getPatientNotes,
  addPatientNote,
  updatePatientNote,
  deletePatientNote,
} = require("../controller/note.controller");

// Route for getting all notes for a specific patient or adding a note
router
  .route("/:patient_id/notes")
  .get(getPatientNotes)  // Get notes for a patient
  .post(addPatientNote); // Add a note for a patient

// Route for getting, updating, or deleting a specific note for a patient by note ID
router
  .route("/:patient_id/notes/:id")
  .put(updatePatientNote)   // Update a specific note for a patient
  .delete(deletePatientNote); // Delete a specific note for a patient

module.exports = router;
