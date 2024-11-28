/* 
Name: Kevin Rodriguez
Date: 11/27/2024 
Description: Sets up Pain scale unit tests to verify the functionality of the patient pain scale model.
*/

const { models } = require("../../models");

describe("Patient Pain Scale Unit Tests", () => {
  let patientPainScaleTest = null;

  beforeEach(async () => {
    patientPainScaleTest = new models.PatientPainScale({
      scale_name: "An interesting scale name",
      scale_value: 5,
    });
  });

  test("CreatesPatientPainScale_WhenAllConditionsMet_ReturnsObject", () => {
    expect(patientPainScaleTest.scale_name).toBe("An interesting scale name");
    expect(patientPainScaleTest.scale_value).toBe(5);
  });

  // Let's verify that it throws errors to fields that can't be null
  test("ThrowsError_WhenPatientPainScaleNameIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...patientPainScaleTest };
      copy.scale_name = null;
      patientPainScaleTest.validate();
    } catch (error) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenPatientPainScaleScaleValueIsNull_ReturnsValidationError", () => {
    try {
        const copy = { ...patientPainScaleTest };
        copy.scale_value = null;
        patientPainScaleTest.validate();
    } catch (error) {
      expect(err.errors).toBeDefined();
    }
  });
});
