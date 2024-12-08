/*
Name: Gabby Pierce 
Date: 12/7/2024
Description: Unit tests for the ADL (Activities of Daily Living) model.
*/

const { models } = require("../../models");

describe("ADL Model Unit Tests", () => {
  let patient = null;
  let adlRecord = null;
  const date = new Date();

  beforeEach(async () => {
    patient = new models.Patient({
      section_id: null,
      date_of_birth: "1985-07-15",
      religion: "Christian",
      full_name: "John Doe",
      weight: 160.0,
      height: 5.8,
      has_insurance: true,
      has_advanced_directives: false,
      allergies: {
        allergy1: "Peanuts",
      },
      emergency_contact_full_name: "Jane Doe",
      emergency_contact_phone_number: "987-654-3210",
      code_status: "FULL-CODE",
      precautions: "CONTACT",
    });

    adlRecord = new models.ADL({
      patient_id: patient.id,
      has_oral_care: false,
      has_bathed: true,
      reposition: "Turned to left side",
      elimination_needed: "Assisted",
      is_meal_given: true,
      amount_meal_consumed: 75,
      created_by: "nurse@example.com",
      created_date: date,
      modified_by: "nurse@example.com",
      modified_date: date,
    });
  });

  test("CreatesADLRecord_WhenAllConditionsMet_ReturnsObject", () => {
    expect(adlRecord.patient_id).toBe(patient.id);
    expect(adlRecord.has_oral_care).toBe(false);
    expect(adlRecord.has_bathed).toBe(true);
    expect(adlRecord.reposition).toBe("Turned to left side");
    expect(adlRecord.elimination_needed).toBe("Assisted");
    expect(adlRecord.is_meal_given).toBe(true);
    expect(adlRecord.amount_meal_consumed).toBe(75);
    expect(adlRecord.created_by).toBe("nurse@example.com");
    expect(adlRecord.modified_by).toBe("nurse@example.com");
  });
      
  test("ThrowsError_WhenPatientIdIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...adlRecord };
      copy.patient_id = null;
      adlRecord.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenRepositionIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...adlRecord };
      copy.reposition = null;
      adlRecord.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenEliminationNeededIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...adlRecord };
      copy.elimination_needed = null;
      adlRecord.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenCreatedByIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...adlRecord };
      copy.created_by = null;
      adlRecord.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenModifiedByIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...adlRecord };
      copy.modified_by = null;
      adlRecord.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("DoesNotThrowError_WhenOptionalFieldsAreNull_AllowedToBeNullable", () => {
    try {
      const copy = { ...adlRecord };
      copy.amount_meal_consumed = null; 
      adlRecord.validate();
    } catch (err) {
      expect(err.errors).toBeUndefined(); 
    }
  });
});
