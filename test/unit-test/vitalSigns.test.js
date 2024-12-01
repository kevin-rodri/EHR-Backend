/* 
Name: Kevin Rodriguez
Date: 11/27/2024 
Description: Sets up Vital Signs unit tests to verify the functionality of the vital signs model.
*/
const { models } = require("../../models");

describe("Vital Signs Unit Tests", () => {
  let vitalSignsTest = null;
  let patientPainScaleTest = null;
  let patientTest = null;
  let date = new Date();
  beforeEach(() => {
    // hehe
    patientPainScaleTest = new models.PatientPainScale({
      scale_name: "An interesting scale name",
      scale_value: 5,
    });
    patientTest = new models.Patient({
      section_id: null,
      date_of_birth: date,
      religion: "Christian",
      full_name: "Christian Duncan",
      weight: 150.0,
      height: 5.6,
      has_insurance: true,
      has_advanced_directives: true,
      allergies: {
        allergy1: "Peanuts",
        allergy2: "Wheat",
      },
      emergency_contact_full_name: "Jonathan Blake",
      emergency_contact_phone_number: "123-456-7890",
      code_status: "FULL-CODE",
      precautions: "CONTACT",
    });
    vitalSignsTest = new models.VitalSigns({
      patient_id: patientTest.id,
      patient_pain_scale_id: patientPainScaleTest.id,
      heart_rate: 80,
      blood_pressure_systolic: 120,
      blood_pressure_diastolic: 50,
      respiratory_rate: 20,
      o2_percent_saturation: 50,
      temperature: 99.6,
      accu_check_value: 100,
      created_by: "Sandy Cheeks",
      created_date: date.valueOf(),
      modified_by: "Sandy Cheeks",
      modified_date: date.valueOf(),
    });
  });

  test("CreatesVitalSigns_WhenAllConditionsMet_ReturnsObject", () => {
    expect(vitalSignsTest.heart_rate).toBe(80);
    expect(vitalSignsTest.blood_pressure_systolic).toBe(120);
    expect(vitalSignsTest.blood_pressure_diastolic).toBe(50);
    expect(vitalSignsTest.respiratory_rate).toBe(20);
    expect(vitalSignsTest.o2_percent_saturation).toBe(50);
    expect(vitalSignsTest.temperature).toBe(99.6);
    expect(vitalSignsTest.accu_check_value).toBe(100);
    expect(vitalSignsTest.created_by).toBe("Sandy Cheeks");
    expect(vitalSignsTest.created_date).toBe(date.valueOf());
    expect(vitalSignsTest.modified_by).toBe("Sandy Cheeks");
    expect(vitalSignsTest.modified_date).toBe(date.valueOf());
  });

  // verify that the vital signs belong to the patient
  test("CreatesVitalSigns_WhenAllConditionsMet_ReturnsVitalSignsBelongsToPatient", () => {
    expect(vitalSignsTest.patient_id).toBe(patientTest.id);
    expect(patientTest.date_of_birth).toBe(date);
    expect(patientTest.religion).toBe("Christian");
    expect(patientTest.full_name).toBe("Christian Duncan");
    expect(patientTest.weight).toBe(150.0);
    expect(patientTest.height).toBe(5.6);
    expect(patientTest.has_insurance).toBe(true);
    expect(patientTest.has_advanced_directives).toBe(true);
    expect(patientTest.allergies.allergy1).toBe("Peanuts");
    expect(patientTest.allergies.allergy2).toBe("Wheat");
    expect(patientTest.emergency_contact_full_name).toBe("Jonathan Blake");
    expect(patientTest.emergency_contact_phone_number).toBe("123-456-7890");
    expect(patientTest.code_status).toBe("FULL-CODE");
    expect(patientTest.precautions).toBe("CONTACT");
  });

  // verify that the pain scale links to the vital signs so that we can the patients pain scale info.
  test("CreatesVitalSigns_WhenAllConditionsMet_ReturnsVitalSignsBelongsToPatientPainScale", () => {
    expect(vitalSignsTest.patient_pain_scale_id).toBe(patientPainScaleTest.id);
    expect(patientPainScaleTest.scale_name).toBe("An interesting scale name");
    expect(patientPainScaleTest.scale_value).toBe(5);
  });

  // Let's verify that it throws errors to fields that can't be null
  test("ThrowsError_WhenPatientIdIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...vitalSignsTest };
      copy.patient_id = null;
      vitalSignsTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenPatientPainScaleIdIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...vitalSignsTest };
      copy.patient_pain_scale_id = null;
      vitalSignsTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenHeartRateIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...vitalSignsTest };
      copy.heart_rate = null;
      vitalSignsTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenBloodPressureSystolicIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...vitalSignsTest };
      copy.blood_pressure_systolic = null;
      vitalSignsTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenBloodPressureDiastolicIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...vitalSignsTest };
      copy.blood_pressure_diastolic = null;
      vitalSignsTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenRespiratoryRateIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...vitalSignsTest };
      copy.respiratory_rate = null;
      vitalSignsTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenO2PercentSaturationIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...vitalSignsTest };
      copy.o2_percent_saturation = null;
      vitalSignsTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenTemperatureIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...vitalSignsTest };
      copy.temperature = null;
      vitalSignsTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenAccuCheckValueIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...vitalSignsTest };
      copy.accu_check_value = null;
      vitalSignsTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenCreatedByIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...vitalSignsTest };
      copy.created_by = null;
      vitalSignsTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenCreatedDateIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...vitalSignsTest };
      copy.created_date = null;
      vitalSignsTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenModifiedByIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...vitalSignsTest };
      copy.modified_by = null;
      vitalSignsTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenModifiedDateIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...vitalSignsTest };
      copy.modified_date = null;
      vitalSignsTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });
});
