/*
Name: Kevin Rodriguez 
Date: 12/05/24
Unit Tests for the Nuerological Info model
*/

const { models } = require("../../models");

describe("Neurological Info Unit Tests", () => {
  let neurologicalInfoTest = null;
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

    neurologicalInfoTest = new models.NeurologicalInfo({
      assessment_id: assessmentTest.id,
      created_by: "Ruby ElKharboutly",
      created_date: date.valueOf(),
      modified_by: "Ruby ElKharboutly",
      modified_date: date.valueOf(),
      neurological_note: "Patient is having a really hard day.",
    });
  });

  test("CreatesNeurologicalInfo_WhenAllConditionsMet_ReturnsObject", () => {
    expect(neurologicalInfoTest.created_by).toBe("Ruby ElKharboutly");
    expect(neurologicalInfoTest.modified_by).toBe("Ruby ElKharboutly");
    expect(neurologicalInfoTest.created_date).toBe(date.valueOf());
    expect(neurologicalInfoTest.modified_date).toBe(date.valueOf());
  });

  // verify that an neurological info model belongs to an assessment
  test("CreatesNeurologicalInfo_WhenAllConditionsMet_ReturnsObject", () => {
    expect(neurologicalInfoTest.assessment_id).toBe(assessmentTest.id);
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
      const copy = { ...neurologicalInfoTest };
      copy.assessment_id = null;
      neurologicalInfoTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenCreatedByIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...neurologicalInfoTest };
      copy.created_by = null;
      neurologicalInfoTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenCreatedDateIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...neurologicalInfoTest };
      copy.created_date = null;
      neurologicalInfoTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenModifiedByIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...neurologicalInfoTest };
      copy.modified_by = null;
      neurologicalInfoTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenModifiedDateIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...neurologicalInfoTest };
      copy.modified_date = null;
      neurologicalInfoTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });
});
