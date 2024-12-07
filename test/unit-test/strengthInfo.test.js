/*
Name: Kevin Rodriguez 
Date: 12/05/24
Unit Tests for the Strength Info model
*/
const { models } = require("../../models");

describe("Strength Info Unit Tests", () => {
  let strengthInfoTest = null;
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

    strengthInfoTest = new models.StrengthInfo({
      neurological_id: neurologicalInfoTest.id,
      strength_left_upper_extremity_grip: "Normal",
      strength_left_upper_extremity_sensation: "itchy",
      strength_right_upper_extremity_grip: "Weak",
      strength_left_lower_extremity_strength: "Strong",
      strength_left_lower_extremity_sensation: "Soft",
      strength_right_lower_extremity_strength: "Weak",
      strength_right_lower_extremity_sensation: "Ticklish",
    });
  });

  // verify that an strength info fields
  test("CreatesStrengthInfo_WhenAllConditionsMet_ReturnsObject", () => {
    expect(strengthInfoTest.strength_left_upper_extremity_grip).toBe("Normal");
    expect(strengthInfoTest.strength_left_upper_extremity_sensation).toBe(
      "itchy"
    );
    expect(strengthInfoTest.strength_right_upper_extremity_grip).toBe("Weak");
    expect(strengthInfoTest.strength_left_lower_extremity_strength).toBe(
      "Strong"
    );
    expect(strengthInfoTest.strength_left_lower_extremity_sensation).toBe(
      "Soft"
    );
    expect(strengthInfoTest.strength_right_lower_extremity_strength).toBe(
      "Weak"
    );
    expect(strengthInfoTest.strength_right_lower_extremity_sensation).toBe(
      "Ticklish"
    );
  });

  // verify that an strength info is associated with a neurological info
  test("CreatesStrengthInfo_WhenAllConditionsMet_ReturnsObject", () => {
    expect(strengthInfoTest.neurological_id).toBe(neurologicalInfoTest.id);
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

  // lets check for non nullable fields for strength info
  test("ThrowsError_WhenNeurologicalIdIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...strengthInfoTest };
      copy.neurological_id = null;
      strengthInfoTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenStrengthLeftUpperExtremityGripIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...strengthInfoTest };
      copy.strength_left_upper_extremity_grip = null;
      strengthInfoTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenStrengthLeftUpperExtremitySensationIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...strengthInfoTest };
      copy.strength_left_upper_extremity_sensation = null;
      strengthInfoTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenStrengthRightUpperExtremityGripIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...strengthInfoTest };
      copy.strength_right_upper_extremity_grip = null;
      strengthInfoTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenStrengthLeftLowerExtremityStrengthIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...strengthInfoTest };
      copy.strength_left_lower_extremity_strength = null;
      strengthInfoTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenStrengthLeftLowerExtremitySensationIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...strengthInfoTest };
      copy.strength_left_lower_extremity_sensation = null;
      strengthInfoTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenStrengthRightLowerExtremityStrengthIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...strengthInfoTest };
      copy.strength_right_lower_extremity_strength = null;
      strengthInfoTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenStrengthRightLowerExtremitySensationIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...strengthInfoTest };
      copy.strength_right_lower_extremity_sensation = null;
      strengthInfoTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });
});
