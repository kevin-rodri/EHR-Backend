/*
Name: Kevin Rodriguez
Date: 12/9/2024
Description: unit tests for the respiratoryInfo model. 
*/

const { models } = require("../../models");

describe("Respiratory Info Unit tests", () => {
  let respiratoryInfo = null;
  let assessment = null;
  let patient = null;
  const date = new Date();

  beforeEach(() => {
    patientTest = new models.Patient({
      section_id: null,
      date_of_birth: date,
      religion: "Christian",
      full_name: "Kevin Hart",
      weight: 150.0,
      height: 5.6,
      has_insurance: true,
      has_advanced_directives: true,
      allergies: {
        allergy1: "Dust",
        allergy2: "Peanuts",
        allergy3: "Sand",
      },
      emergency_contact_full_name: "John Smith",
      emergency_contact_phone_number: "123-816-7890",
      code_status: "FULL-CODE",
      precautions: "CONTACT",
    });

    assessment = new models.Assessments({
      patient_id: patientTest.id,
    });

    respiratoryInfo = new models.RespiratoryInfo({
      assessment_id: assessment.id,
      created_by: "Kevin R. , PhD",
      created_date: date.valueOf(),
      modified_by: "Kevin R. , PhD",
      modified_date: date.valueOf(),
    });
  });

  test("CreatesRespiratoryInfo_WhenAllConditionsMet_ReturnsObject", () => {
    expect(respiratoryInfo.created_by).toBe("Kevin R. , PhD");
    expect(respiratoryInfo.created_date).toBe(date.valueOf());
    expect(respiratoryInfo.modified_by).toBe("Kevin R. , PhD");
    expect(respiratoryInfo.modified_date).toBe(date.valueOf());
  });

  test("CreatesRespiratoryInfo_WhenAllConditionsMet_ReturnsObject", () => {
    expect(respiratoryInfo.assessment_id).toBe(assessment.id);
  });

  test("CreatesAssessment_WhenAllConditionsMet_ReturnsObject", () => {
    expect(assessment.patient_id).toBe(patientTest.id);
  });

  // check for non-null fields 
    test("ThrowsError_WhenAssessmentIdIsNull_ReturnsValidationError", () => {
        try {
        const copy = { ...respiratoryInfo };
        copy.assessment_id = null;
        respiratoryInfo.validate();
        } catch (err) {
        expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenCreatedByIsNull_ReturnsValidationError", () => {
        try {
        const copy = { ...respiratoryInfo };
        copy.created_by = null;
        respiratoryInfo.validate();
        } catch (err) {
        expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenCreatedDateIsNull_ReturnsValidationError", () => {
        try {
        const copy = { ...respiratoryInfo };
        copy.created_date = null;
        respiratoryInfo.validate();
        } catch (err) {
        expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenModifiedByIsNull_ReturnsValidationError", () => {
        try {
        const copy = { ...respiratoryInfo };
        copy.modified_by = null;
        respiratoryInfo.validate();
        } catch (err) {
        expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenModifiedDateIsNull_ReturnsValidationError", () => {
        try {
        const copy = { ...respiratoryInfo };
        copy.modified_date = null;
        respiratoryInfo.validate();
        } catch (err) {
        expect(err.errors).toBeDefined();
        }
    });

});
