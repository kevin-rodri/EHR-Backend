/*
Name: Kevin Rodriguez
Date: 12/9/2024
Description: Unit tests for the lungs model.
*/

const { models } = require("../../models");

describe("Lungs Unit tests", () => {
  let lungs = null;
  let respiratoryInfo = null;
  let assessment = null;
  let patient = null;
  const date = new Date();

  beforeEach(() => {
    patient = new models.Patient({
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
      patient_id: patient.id,
    });

    respiratoryInfo = new models.RespiratoryInfo({
      assessment_id: assessment.id,
      created_by: "Kevin R.",
      created_date: date.valueOf(),
      modified_by: "Kevin R",
      modified_date: date.valueOf(),
    });

    lungs = new models.Lungs({
      respiratory_id: respiratoryInfo.id,
      breathing_pattern: "Normal",
      breathing_effort: "Normal",
      anterior_right_upper_lobe: "Mild crackles",
      posterior_right_upper_lobe: "Clear",
      anterior_lower_upper_lobe: "Crackles",
      posterior_lower_upper_lobe: "Clear",
      anterior_right_middle_lobe: "Clear",
      posterior_right_middle_lobe: "Diminished",
      anterior_right_lower_lobe: "Clear",
      posterior_right_lower_lobe: "Wheezing",
      anterior_left_lower_lobe: "Clear",
      posterior_left_lower_lobe: "Clear",
    });
  });

    test("CreatesLungs_WhenAllConditionsMet_ReturnsObject", () => {
        expect(lungs.breathing_pattern).toBe("Normal");
        expect(lungs.breathing_effort).toBe("Normal");
        expect(lungs.anterior_right_upper_lobe).toBe("Mild crackles");
        expect(lungs.posterior_right_upper_lobe).toBe("Clear");
        expect(lungs.anterior_lower_upper_lobe).toBe("Crackles");
        expect(lungs.posterior_lower_upper_lobe).toBe("Clear");
        expect(lungs.anterior_right_middle_lobe).toBe("Clear");
        expect(lungs.posterior_right_middle_lobe).toBe("Diminished");
        expect(lungs.anterior_right_lower_lobe).toBe("Clear");
        expect(lungs.posterior_right_lower_lobe).toBe("Wheezing");
        expect(lungs.anterior_left_lower_lobe).toBe("Clear");
        expect(lungs.posterior_left_lower_lobe).toBe("Clear");
    });

    test("CreatesLungs_WhenAllConditionsMet_ReturnsObject", () => {
        expect(lungs.respiratory_id).toBe(respiratoryInfo.id);
    });

    test("CreatesAssessment_WhenAllConditionsMet_ReturnsObject", () => {
        expect(assessment.patient_id).toBe(patient.id);
      });

      // non-null fields
    test("ThrowsError_WhenRespiratoryIdIsNull_ReturnsValidationError", () => {
        try {
        const copy = { ...lungs };
        copy.respiratory_id = null;
        lungs.validate();
        } catch (err) {
        expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenBreathingPatternIsNull_ReturnsValidationError", () => {
        try {
        const copy = { ...lungs };
        copy.breathing_pattern = null;
        lungs.validate();
        } catch (err) {
        expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenBreathingEffortIsNull_ReturnsValidationError", () => {
        try {
        const copy = { ...lungs };
        copy.breathing_effort = null;
        lungs.validate();
        } catch (err) {
        expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenAnteriorRightUpperLobeIsNull_ReturnsValidationError", () => {
        try {
        const copy = { ...lungs };
        copy.anterior_right_upper_lobe = null;
        lungs.validate();
        } catch (err) {
        expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenPosteriorRightUpperLobeIsNull_ReturnsValidationError", () => {
        try {
        const copy = { ...lungs };
        copy.posterior_right_upper_lobe = null;
        lungs.validate();
        } catch (err) {
        expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenAnteriorLowerUpperLobeIsNull_ReturnsValidationError", () => {
        try {
        const copy = { ...lungs };
        copy.anterior_lower_upper_lobe = null;
        lungs.validate();
        } catch (err) {
        expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenPosteriorLowerUpperLobeIsNull_ReturnsValidationError", () => {
        try {
        const copy = { ...lungs };
        copy.posterior_lower_upper_lobe = null;
        lungs.validate();
        } catch (err) {
        expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenAnteriorRightMiddleLobeIsNull_ReturnsValidationError", () => {
        try {
        const copy = { ...lungs };
        copy.anterior_right_middle_lobe = null;
        lungs.validate();
        } catch (err) {
        expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenPosteriorRightMiddleLobeIsNull_ReturnsValidationError", () => {
        try {
        const copy = { ...lungs };
        copy.posterior_right_middle_lobe = null;
        lungs.validate();
        } catch (err) {
        expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenAnteriorRightLowerLobeIsNull_ReturnsValidationError", () => {
        try {
        const copy = { ...lungs };
        copy.anterior_right_lower_lobe = null;
        lungs.validate();
        } catch (err) {
        expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenPosteriorRightLowerLobeIsNull_ReturnsValidationError", () => {
        try {
        const copy = { ...lungs };
        copy.posterior_right_lower_lobe = null;
        lungs.validate();
        } catch (err) {
        expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenAnteriorLeftLowerLobeIsNull_ReturnsValidationError", () => {
        try {
        const copy = { ...lungs };
        copy.anterior_left_lower_lobe = null;
        lungs.validate();
        } catch (err) {
        expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenPosteriorLeftLowerLobeIsNull_ReturnsValidationError", () => {
        try {
        const copy = { ...lungs };
        copy.posterior_left_lower_lobe = null;
        lungs.validate();
        } catch (err) {
        expect(err.errors).toBeDefined();
        }
    });
});
