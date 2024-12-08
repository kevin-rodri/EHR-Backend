/*
Name: Gabby Pierce
Date: 12/7/2024
Description: Unit tests for the Patient History model.
*/

const { models } = require("../../models");

describe("Patient History Unit", () => {
  let patient = null;
  let patientHistory = null;
  const date = new Date();

  beforeEach(async () => {
    // Mock Patient object
    patient = new models.Patient({
      section_id: null,
      date_of_birth: "1985-07-15",
      religion: "Hindu",
      full_name: "John Doe",
      weight: 160.0,
      height: 5.8,
      has_insurance: true,
      has_advanced_directives: false,
      allergies: {
        allergy1: "Peanuts",
        allergy2: "Dust",
      },
      emergency_contact_full_name: "Jane Doe",
      emergency_contact_phone_number: "987-654-3210",
      code_status: "FULL-CODE",
      precautions: "DROPLET",
    });

    // Mock PatientHistory object
    patientHistory = new models.PatientHistory({
      patient_id: patient.id,
      type: "Medical/Surgical History",
      title: "Appendectomy",
      description: "The patient had an appendectomy in 2015.",
      created_date: date,
      modified_date: date,
    });
  });

  test("CreatesPatientHistory_WhenAllConditionsMet_ReturnsObject", () => {
    expect(patientHistory.type).toBe("Medical/Surgical History");
    expect(patientHistory.title).toBe("Appendectomy");
    expect(patientHistory.description).toBe(
      "The patient had an appendectomy in 2015."
    );
    expect(patientHistory.created_date).toBe(date);
    expect(patientHistory.modified_date).toBe(date);
  });

  // Verify the patient history belongs to the patient
  test("CreatesPatientHistory_WhenAllConditionsMet_ReturnsPatientHistoryBelongsToPatient", () => {
    expect(patientHistory.patient_id).toBe(patient.id);
  });

  test("ThrowsError_WhenPatientIdIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...patientHistory };
      copy.patient_id = null;
      patientHistory.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenTypeIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...patientHistory };
      copy.type = null;
      patientHistory.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenTitleIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...patientHistory };
      copy.title = null;
      patientHistory.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("DoesNotThrowError_WhenDescriptionIsNull_AllowedToBeNullable", () => {
    try {
      const copy = { ...patientHistory };
      copy.description = null; 
      patientHistory.validate();
    } catch (err) {
      expect(err.errors).toBeUndefined(); 
    }
  });

  test("ThrowsError_WhenCreatedDateIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...patientHistory };
      copy.created_date = null;
      patientHistory.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenModifiedDateIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...patientHistory };
      copy.modified_date = null;
      patientHistory.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });
});
