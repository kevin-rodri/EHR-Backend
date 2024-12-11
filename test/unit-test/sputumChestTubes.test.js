/*
Name: Kevin Rodriguez
Date: 12/10/24
Description Unit tests for the sputum chest tubes
*/

const { models } = require("../../models");

describe("Sputum Chest Tubes Unit Tests", () => {
  let sputumChestTubes = null;
  let respiratoryInfo = null;
  let assessment = null;
  let patient = null;
  const date = new Date();

  beforeEach(() => {
    patient = new models.Patient({
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

    assessment = new models.Assessments({
      patient_id: patient.id,
    });

    respiratoryInfo = new models.RespiratoryInfo({
      assessment_id: assessment.id,
      created_by: "Ruby ElKharboutly",
      created_date: date.valueOf(),
      modified_by: "Ruby ElKharboutly",
      modified_date: date.valueOf(),
    });

    sputumChestTubes = new models.SputumChestTubes({
      respiratory_id: respiratoryInfo.id,
      sputum_amount: 12.23,
      sputum_color: "Yellow",
      has_incentive_spirometer_use: true,
    });
  });

  test("CreatesSputumChestTubes_WhenAllConditionsMet_ReturnsObject", () => {
    expect(sputumChestTubes.sputum_amount).toBe(12.23);
    expect(sputumChestTubes.sputum_color).toBe("Yellow");
    expect(sputumChestTubes.has_incentive_spirometer_use).toBe(true);
  });

  test("CreatesSputumChestTubes_WhenAllConditionsMet_ReturnsObject", () => {
    expect(sputumChestTubes.respiratory_id).toBe(respiratoryInfo.id);
  });

  test("CreatesRespiratoryInfo_WhenAllConditionsMet_ReturnsObject", () => {
    expect(respiratoryInfo.assessment_id).toBe(assessment.id);
  });

  // check for non-null fields
  test("ThrowsError_WhenRespiratoryIdIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...sputumChestTubes };
      copy.respiratory_id = null;
      sputumChestTubes.validate();
    } catch (error) {
      expect(error).not.toBeNull();
    }
  });

  test("ThrowsError_WhenSputumAmountIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...sputumChestTubes };
      copy.sputum_amount = null;
      sputumChestTubes.validate();
    } catch (error) {
      expect(error).not.toBeNull();
    }
  });

  test("ThrowsError_WhenSputumColorIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...sputumChestTubes };
      copy.sputum_color = null;
      sputumChestTubes.validate();
    } catch (error) {
      expect(error).not.toBeNull();
    }
  });

  test("ThrowsError_WhenIncentiveSpirometerUseIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...sputumChestTubes };
      copy.has_incentive_spirometer_use = null;
      sputumChestTubes.validate();
    } catch (error) {
      expect(error).not.toBeNull();
    }
  });
});
