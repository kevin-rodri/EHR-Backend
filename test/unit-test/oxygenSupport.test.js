/*
Name: Kevin Rodriguez
Date: 12/10/2024
Descripption: Unit tests for Oxygen support. 
*/

const { models } = require("../../models");

describe("Oxygen Support Unit tests", () => {
  let oxygenSupport = null;
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

    oxygenSupport = new models.OxygenSupport({
      respiratory_id: respiratoryInfo.id,
      has_continuous_oxygen_pulse: true,
      has_oxygen_support: true,
      oxygen_support_device: "Ventilator",
      oxygen_flow_rate: "2L/min",
    });
  });

  test("CreatesOxygenSupport_WhenAllConditionsMet_ReturnsObject", () => {
    expect(oxygenSupport.has_continuous_oxygen_pulse).toBe(true);
    expect(oxygenSupport.has_oxygen_support).toBe(true);
    expect(oxygenSupport.oxygen_support_device).toBe("Ventilator");
    expect(oxygenSupport.oxygen_flow_rate).toBe("2L/min");
  });

  test("CreatesOxygenSupport_WhenAllConditionsMet_ReturnsObject", () => {
    expect(oxygenSupport.respiratory_id).toBe(respiratoryInfo.id);
  });

  test("CreatesAssessment_WhenAllConditionsMet_ReturnsObject", () => {
    expect(assessment.patient_id).toBe(patient.id);
  });

  // now for non-null fields
  test("ThrowsError_WhenAssessmentIdIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...oxygenSupport };
      copy.respiratory_id = null;
      oxygenSupport.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenContinuousOxygenPulseIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...oxygenSupport };
      copy.has_continuous_oxygen_pulse = null;
      oxygenSupport.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenOxygenSupportIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...oxygenSupport };
      copy.has_oxygen_support = null;
      oxygenSupport.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenOxygenSupportDeviceIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...oxygenSupport };
      copy.oxygen_support_device = null;
      oxygenSupport.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenOxygenFlowRateIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...oxygenSupport };
      copy.oxygen_flow_rate = null;
      oxygenSupport.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });
});
