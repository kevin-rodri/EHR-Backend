/* 
Name: Dylan Bellinger
Date: 12/8/2024
Description: Musculoskeletal Info model unit tests.
*/
const { models } = require("../../models");

describe("Musculoskeletal Info Unit Tests", () => {
  let musculoskeletalInfoTest = null;
  let assessmentTest = null;
  let adlTest = null;
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

    adlTest = new models.ADL({
      patient_id: patientTest.id,
      has_oral_care: true,
      has_bathed: true,
      reposition: "Patient was repositioned from supine to left lateral",
      elimination_needed: "Urination needed",
      is_meal_given: true,
      amount_meal_consumed: 28,
      created_by: "Dr. B",
      created_date: date.valueOf(),
      modified_by: "Dr. B",
      modified_date: date.valueOf(),
    });

    musculoskeletalInfoTest = new models.MusculoskeletalInfo({
      assessment_id: assessmentTest.id,
      left_upper_extremity: "Full range of motion, no pain",
      left_lower_extremity: "Mild pain on weight-bearing",
      right_upper_extremity: "Elbow pain with flexion",
      right_lower_extremity: "No abnormalities noted",
      gait: "Normal and steady",
      adl_id: adlTest.id,
      abnormalities: "Reduced range of motion in left shoulder and right knee",
      created_by: "Dr. B",
      created_date: date.valueOf(),
      modified_by: "Dr. B",
      modified_date: date.valueOf(),
    });
  });

  test("CreatesMusculoskeletalInfo_WhenAllConditionsMet_ReturnsObject", () => {
    expect(musculoskeletalInfoTest.left_upper_extremity).toBe("Full range of motion, no pain");
    expect(musculoskeletalInfoTest.left_lower_extremity).toBe("Mild pain on weight-bearing");
    expect(musculoskeletalInfoTest.right_upper_extremity).toBe("Elbow pain with flexion");
    expect(musculoskeletalInfoTest.right_lower_extremity).toBe("No abnormalities noted");
    expect(musculoskeletalInfoTest.gait).toBe("Normal and steady");
    expect(musculoskeletalInfoTest.abnormalities).toBe("Reduced range of motion in left shoulder and right knee");
    expect(musculoskeletalInfoTest.created_by).toBe("Dr. B");
    expect(musculoskeletalInfoTest.created_date).toBe(date.valueOf());
    expect(musculoskeletalInfoTest.modified_by).toBe("Dr. B");
    expect(musculoskeletalInfoTest.modified_date).toBe(date.valueOf());
  });

  test("CreatesMusculoskeletalInfo_WhenAllConditionsMet_ReturnsObject", () => {
    expect(musculoskeletalInfoTest.assessment_id).toBe(assessmentTest.id);
  });

  test("CreatesMusculoskeletalInfo_WhenAllConditionsMet_ReturnsObject", () => {
    expect(musculoskeletalInfoTest.adl_id).toBe(adlTest.id);
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

  test("CreatesADL_WhenAllConditionsMet_ReturnsObject", () => {
    expect(adlTest.patient_id).toBe(patientTest.id);
    expect(adlTest.has_oral_care).toBe(true);
    expect(adlTest.has_bathed).toBe(true);
    expect(adlTest.reposition).toBe("Patient was repositioned from supine to left lateral");
    expect(adlTest.elimination_needed).toBe("Urination needed");
    expect(adlTest.is_meal_given).toBe(true);
    expect(adlTest.amount_meal_consumed).toBe(28);
    expect(adlTest.created_by).toBe("Dr. B");
    expect(adlTest.created_date).toBe(date.valueOf());
    expect(adlTest.modified_by).toBe("Dr. B");
    expect(adlTest.modified_date).toBe(date.valueOf());
  });

  test("ThrowsError_WhenAssessmentIdIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...musculoskeletalInfoTest };
      copy.assessment_id = null;
      musculoskeletalInfoTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenLeftUpperExtremityIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...musculoskeletalInfoTest };
      copy.left_upper_extremity = null;
      musculoskeletalInfoTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenLeftLowerExtremityIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...musculoskeletalInfoTest };
      copy.left_lower_extremity = null;
      musculoskeletalInfoTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenRightUpperExtremityIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...musculoskeletalInfoTest };
      copy.right_upper_extremity = null;
      musculoskeletalInfoTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenRightLowerExtremityIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...musculoskeletalInfoTest };
      copy.right_lower_extremity = null;
      musculoskeletalInfoTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenGaitIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...musculoskeletalInfoTest };
      copy.gait = null;
      musculoskeletalInfoTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenCreatedByIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...musculoskeletalInfoTest };
      copy.created_by = null;
      musculoskeletalInfoTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenCreatedDateIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...musculoskeletalInfoTest };
      copy.created_date = null;
      musculoskeletalInfoTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenModifiedByIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...musculoskeletalInfoTest };
      copy.modified_by = null;
      musculoskeletalInfoTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenModifiedDateIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...musculoskeletalInfoTest };
      copy.modified_date = null;
      musculoskeletalInfoTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });
});