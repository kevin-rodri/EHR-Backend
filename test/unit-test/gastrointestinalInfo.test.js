/* 
Name: Dylan Bellinger
Date: 12/7/2024 
Description: Gastrointestinal Info model unit tests.
*/
const { models } = require("../../models");

describe("Gastrointestinal Info Unit Tests", () => {
  let gastrointestinalInfoTest = null;
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

    gastrointestinalInfoTest = new models.GastrointestinalInfo({
      assessment_id: assessmentTest.id,
      right_upper_quadrant: "No abnormalities noted",
      right_lower_quadrant: "Tenderness on palpation",
      lower_upper_quadrant: "Enlarged liver detected",
      lower_lower_quadrant: "Galbladder pain reported",
      stool: "Normal and well-formed",
      last_bowel_movement: date.valueOf(),
      gastric_tubic_note: "No gastric tube present",
      created_by: "Dr. B",
      created_date: date.valueOf(),
      modified_by: "Dr. B",
      modified_date: date.valueOf(),
    });
  });

  test("CreatesGastrointestinalInfo_WhenAllConditionsMet_ReturnsObject", () => {
    expect(gastrointestinalInfoTest.right_upper_quadrant).toBe("No abnormalities noted");
    expect(gastrointestinalInfoTest.right_lower_quadrant).toBe("Tenderness on palpation");
    expect(gastrointestinalInfoTest.lower_upper_quadrant).toBe("Enlarged liver detected");
    expect(gastrointestinalInfoTest.lower_lower_quadrant).toBe("Galbladder pain reported");
    expect(gastrointestinalInfoTest.stool).toBe("Normal and well-formed");
    expect(gastrointestinalInfoTest.last_bowel_movement).toBe(date.valueOf());
    expect(gastrointestinalInfoTest.gastric_tubic_note).toBe("No gastric tube present");
    expect(gastrointestinalInfoTest.created_by).toBe("Dr. B");
    expect(gastrointestinalInfoTest.created_date).toBe(date.valueOf());
    expect(gastrointestinalInfoTest.modified_by).toBe("Dr. B");
    expect(gastrointestinalInfoTest.modified_date).toBe(date.valueOf());
  });

  test("CreatesGastrointestinalInfo_WhenAllConditionsMet_ReturnsObject", () => {
    expect(gastrointestinalInfoTest.assessment_id).toBe(assessmentTest.id);
  });

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

  test("ThrowsError_WhenAssessmentIdIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...gastrointestinalInfoTest };
      copy.assessment_id = null;
      gastrointestinalInfoTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenRightUpperQuadrantIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...gastrointestinalInfoTest };
      copy.right_upper_quadrant = null;
      gastrointestinalInfoTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenRightLowerQuadrantIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...gastrointestinalInfoTest };
      copy.right_lower_quadrant = null;
      gastrointestinalInfoTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenLowerUpperQuadrantIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...gastrointestinalInfoTest };
      copy.lower_upper_quadrant = null;
      gastrointestinalInfoTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenLowerLowerQuadrantIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...gastrointestinalInfoTest };
      copy.lower_lower_quadrant = null;
      gastrointestinalInfoTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenStoolIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...gastrointestinalInfoTest };
      copy.stool = null;
      gastrointestinalInfoTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenLastBowelMovementIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...gastrointestinalInfoTest };
      copy.last_bowel_movement = null;
      gastrointestinalInfoTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenGastricTubicNoteIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...gastrointestinalInfoTest };
      copy.gastric_tubic_note = null;
      gastrointestinalInfoTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenCreatedByIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...gastrointestinalInfoTest };
      copy.created_by = null;
      gastrointestinalInfoTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenCreatedDateIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...gastrointestinalInfoTest };
      copy.created_date = null;
      gastrointestinalInfoTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenModifiedByIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...gastrointestinalInfoTest };
      copy.modified_by = null;
      gastrointestinalInfoTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenModifiedDateIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...gastrointestinalInfoTest };
      copy.modified_date = null;
      gastrointestinalInfoTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });
});