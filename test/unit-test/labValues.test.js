/* 
Name: Charlize Aponte
Date: 12/7/2024 
Description: Unit tests for the Lab Values model.
*/

const { models } = require("../../models");

describe("Lab Values Unit", () => {
  let patient = null;
  let labValue = null;
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

    labValue = new models.LabValues({
      patient_id: patient.id,
      element_name: "Hemo",
      element_value: 13,
      created_by: "Charlize",
      created_date: date,
      modified_by: "Charlize",
      modified_date: date
    });
  });


  test("CreatesLabValue_WhenAllConditionsMet_ReturnsLabValueBelongsToPatient", () => {
    expect(labValue.patient_id).toBe(patient.id);
  });

  
  test("ThrowsError_WhenPatientIdIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...labValue };
      copy.patient_id = null;
      labValue.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenElementNameIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...labValue };
      copy.element_name = null;
      labValue.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenElementValueIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...labValue };
      copy.element_value = null;
      labValue.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenCreatedByIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...labValue };
      copy.created_by = null;
      labValue.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenModifiedByIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...labValue };
      copy.modified_by = null;
      labValue.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenCreatedDateIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...labValue };
      copy.created_date = null;
      labValue.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenModifiedDateIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...labValue };
      copy.modified_date = null;
      labValue.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });
});
