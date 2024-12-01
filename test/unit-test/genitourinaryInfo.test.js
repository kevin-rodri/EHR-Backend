/* 
Name: Kevin Rodriguez
Date: 11/30/2024 
Description: Unit tests for the genitourinary info model.
*/

const { models } = require("../../models");

describe("Genitourinary Info Unit Tests", () => {
  let genitourinaryInfoTest = null;
  let assessmentTest = null;
  let patientTest = null;
  const date = new Date();

  beforeEach(() => {
    patientTest = new models.Patient({
      section_id: null,
      date_of_birth: date,
      religion: "None",
      full_name: "Sherlock Holmes",
      weight: 150.0,
      height: 5.6,
      has_insurance: true,
      has_advanced_directives: true,
      allergies: {
        allergy1: "Dust",
        allergy2: "Peanuts",
        allergy3: "Wheat",
      },
      emergency_contact_full_name: "John Watson",
      emergency_contact_phone_number: "123-456-7890",
      code_status: "FULL-CODE",
      precautions: "CONTACT",
    });
    assessmentTest = new models.Assessments({
      patient_id: patientTest.id,
    });

    genitourinaryInfoTest = new models.GenitourinaryInfo({
      assessment_id: assessmentTest.id,
      created_by: "Ruby ElKharboutly",
      created_date: date.valueOf(),
      modified_by: "Ruby ElKharboutly",
      modified_date: date.valueOf(),
    });
  });

  test("CreatesGenitourinaryInfo_WhenAllConditionsMet_ReturnsObject", () => {
    expect(genitourinaryInfoTest.created_by).toBe("Ruby ElKharboutly");
    expect(genitourinaryInfoTest.modified_by).toBe("Ruby ElKharboutly");
    expect(genitourinaryInfoTest.created_date).toBe(date.valueOf());
    expect(genitourinaryInfoTest.modified_date).toBe(date.valueOf());
  });

  // verify that an genitourinary info belongs to an assessment
  test("CreatesGenitourinaryInfo_WhenAllConditionsMet_ReturnsObject", () => {
    expect(genitourinaryInfoTest.assessment_id).toBe(assessmentTest.id);
  });

  // verify that the assessment belongs to a patient
  test("CreatesAssessment_WhenAllConditionsMet_ReturnsObject", () => {
    expect(assessmentTest.patient_id).toBe(patientTest.id);
  });

  test("CreatesAssessment_WhenAllConditionsMet_ReturnsAssessmentReturnsatient", () => {
    expect(assessmentTest.patient_id).toBe(patientTest.id);
    expect(patientTest.date_of_birth).toBe(date);
    expect(patientTest.religion).toBe("None");
    expect(patientTest.full_name).toBe("Sherlock Holmes");
    expect(patientTest.weight).toBe(150.0);
    expect(patientTest.height).toBe(5.6);
    expect(patientTest.has_insurance).toBe(true);
    expect(patientTest.has_advanced_directives).toBe(true);
    expect(patientTest.allergies.allergy1).toBe("Dust");
    expect(patientTest.allergies.allergy2).toBe("Peanuts");
    expect(patientTest.allergies.allergy3).toBe("Wheat");
    expect(patientTest.emergency_contact_full_name).toBe("John Watson");
    expect(patientTest.emergency_contact_phone_number).toBe("123-456-7890");
    expect(patientTest.code_status).toBe("FULL-CODE");
    expect(patientTest.precautions).toBe("CONTACT");
  });

  // now check for non-nullable fields
  test("ThrowsError_WhenAssessmentIdIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...genitourinaryInfoTest };
      copy.assessment_id = null;
      genitourinaryInfoTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenCreatedByIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...genitourinaryInfoTest };
      copy.created_by = null;
      genitourinaryInfoTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenCreatedDateIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...genitourinaryInfoTest };
      copy.created_date = null;
      genitourinaryInfoTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenModifiedByIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...genitourinaryInfoTest };
      copy.modified_by = null;
      genitourinaryInfoTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenModifiedDateIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...genitourinaryInfoTest };
      copy.modified_date = null;
      genitourinaryInfoTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });
});
