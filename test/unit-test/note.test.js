/*
Name: Gabby Pierce
Date: 12/7/2024
Description: Unit tests for the Notes model.
*/

const { models } = require("../../models");

describe("Notes Unit", () => {
  let patient = null;
  let note = null;
  const date = new Date();

  beforeEach(async () => {
    patient = new models.Patient({
      section_id: null,
      date_of_birth: "1920-10-10",
      religion: "Christian",
      full_name: "Spongebob Squarepants",
      weight: 150.0,
      height: 5.5,
      has_insurance: true,
      has_advanced_directives: true,
      allergies: {
        allergy1: "Plankton",
        allergy2: "Shellfish",
        allergy3: "Kelp",
      },
      emergency_contact_full_name: "Patrick Star",
      emergency_contact_phone_number: "123-456-7890",
      code_status: "FULL-CODE",
      precautions: "CONTACT",
    });

    note = new models.Note({
      patient_id: patient.id,
      title: "Important Note",
      description: "This is a detailed note about the patient's condition.",
      created_by: "Gabby",
      created_date: date,
      modified_by: "Gabby",
      modified_date: date
    });
  });

  test("CreatesNote_WhenAllConditionsMet_ReturnsObject", () => {
    expect(note.title).toBe("Important Note");
    expect(note.description).toBe("This is a detailed note about the patient's condition.");
    expect(note.created_date).toBe(date);
    expect(note.modified_date).toBe(date);
  });

  test("CreatesNote_WhenAllConditionsMet_ReturnsNoteBelongsToPatient", () => {
    expect(note.patient_id).toBe(patient.id);
  });

  test("ThrowsError_WhenPatientIdIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...note };
      copy.patient_id = null;
      note.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenTitleIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...note };
      copy.title = null;
      note.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenDescriptionIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...note };
      copy.description = null;
      note.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenCreatedDateIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...note };
      copy.created_date = null;
      note.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenModifiedDateIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...note };
      copy.modified_date = null;
      note.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });
});
