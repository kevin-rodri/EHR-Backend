/* 
Name: Kevin Rodriguez
Date: 11/30/2024 
Description: Unit tests for the urinary Details model.
*/

const { models } = require("../../models");

describe("Urinary Details Unit Test", () => {
  let urinaryDetails = null;
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

    urinaryDetails = new models.UrinaryDetails({
      genitourinary_id: genitourinaryInfoTest.id,
      urinary_assessment: "Normal urinary output",
      urinary_diversion_notes:
        "Patient has undergone urinary diversion surgery, monitor output carefully.",
      urinary_route: "Catheterized",
      urine_color: "Clear yellow",
      urine_characteristics: "Clear with no sediment",
      urine_odor: "Neutral",
    });
  });

  // verify that a urinary details object is created
  test("CreatesUrinaryDetails_WhenAllConditionsMet_ReturnsObject", () => {
    expect(urinaryDetails.urinary_assessment).toBe("Normal urinary output");
    expect(urinaryDetails.urinary_diversion_notes).toBe(
      "Patient has undergone urinary diversion surgery, monitor output carefully."
    );
    expect(urinaryDetails.urinary_route).toBe("Catheterized");
    expect(urinaryDetails.urine_color).toBe("Clear yellow");
    expect(urinaryDetails.urine_characteristics).toBe("Clear with no sediment");
    expect(urinaryDetails.urine_odor).toBe("Neutral");
  });

  // lets make sure that the urinary details belong to the genitourinary info
  test("CreatesUrinaryDetails_WhenAllConditionsMet_ReturnsGenitourinaryInfoAssociation", () => {
    expect(urinaryDetails.genitourinary_id).toBe(genitourinaryInfoTest.id);
  });

  // verify the genitourinary has information
  test("CreatesGenitourinaryInfo_WhenAllConditionsMet_ReturnsObject", () => {
    expect(genitourinaryInfoTest.created_by).toBe("Ruby ElKharboutly");
    expect(genitourinaryInfoTest.modified_by).toBe("Ruby ElKharboutly");
    expect(genitourinaryInfoTest.created_date).toBe(date.valueOf());
    expect(genitourinaryInfoTest.modified_date).toBe(date.valueOf());
  });

  // verify that the genitourinary info belongs to an assessment
  test("CreatesGenitourinaryInfo_WhenAllConditionsMet_ReturnsObject", () => {
    expect(genitourinaryInfoTest.assessment_id).toBe(assessmentTest.id);
  });

  // verify that the assessment belongs to a patient
  test("CreatesAssessment_WhenAllConditionsMet_ReturnsObject", () => {
    expect(assessmentTest.patient_id).toBe(patientTest.id);
  });

  test("CreatesAssessment_WhenAllConditionsMet_ReturnsAssessmentReturnsPatient", () => {
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

  // now lets check for non-nullable fields!
  test("ThrowsError_WhenGenitourinaryIdIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...urinaryDetails };
      copy.genitourinary_id = null;
      urinaryDetails.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenUrinaryAssessmentIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...urinaryDetails };
      copy.urinary_assessment = null;
      urinaryDetails.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenUrinaryDiversionNotesIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...urinaryDetails };
      copy.urinary_diversion_notes = null;
      urinaryDetails.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenUrinaryRouteIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...urinaryDetails };
      copy.urinary_route = null;
      urinaryDetails.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenUrineColorIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...urinaryDetails };
      copy.urine_color = null;
      urinaryDetails.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenUrineCharacteristicsIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...urinaryDetails };
      copy.urine_characteristics = null;
      urinaryDetails.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenUrineOdorIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...urinaryDetails };
      copy.urine_odor = null;
      urinaryDetails.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });
});
