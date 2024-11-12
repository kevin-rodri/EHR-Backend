/* 
Name: Kevin Rodriguez
Date: 11/4/2024 
Description: Unit tests for the Patient Orders model.
*/
const Patient = require("../../models/Patient");
const PatientOrders = require("../../models/PatientOrders");

describe("Patient Orders Unit", () => {
  let patient = null;
  let patientOrder = null;
  const date = new Date();
  beforeEach(async () => {
    patient = new Patient({
      patient_id: "6ccd780c-baba-1026-9564-5b8c659018db",
      section_id: null,
      date_of_birth: "1920-10-10",
      religion: "Christian",
      full_name: "Spongebob Squarepants",
      weight: 150.0,
      height: 5.5,
      has_insurance: true,
      has_advanced_directives: true,
      allergies: {
        allergy1: "Plankton",
        allergy2: "Shellfish",
        allergy3: "Kelp",
      },
      emergency_contact_full_name: "Patrick Star",
      emergency_contact_phone_number: "123-456-7890",
      code_status: "FULL-CODE",
      precautions: "CONTACT",
    });
    patientOrder = new PatientOrders({
      patient_order_id: "6ccd780c-bake-1026-2395-5b8c656024db",
      patient_id: patient.patient_id,
      order_title: "A Patient Order",
      description:
        "This patient order is meant to be really descriptive. I do not get paid enough to write a long description, so this will do.",
      created_date: date,
      modified_date: date,
    });
  });

  test("CreatesPatientOrder_WhenAllConditionsMet_ReturnsObject", () => {
    expect(patientOrder.patient_order_id).toBe(
      "6ccd780c-bake-1026-2395-5b8c656024db"
    );
    expect(patientOrder.patient_id).toBe(patient.patient_id);
    expect(patientOrder.order_title).toBe("A Patient Order");
    expect(patientOrder.description).toBe(
      "This patient order is meant to be really descriptive. I do not get paid enough to write a long description, so this will do."
    );
    expect(patientOrder.created_date).toBe(date);
    expect(patientOrder.modified_date).toBe(date);
  });

  // verify the patient order belongs to the patient
  test("CreatesPatientOrder_WhenAllConditionsMet_ReturnsPatientOrderBelongsToPatient", () => {
    expect(patientOrder.patient_id).toBe(patient.patient_id);
  });

  test("ThrowsError_WhenPatientOrderIdIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...patientOrder };
      copy.patient_order_id = null;
      patientOrder.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenPatientIdIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...patientOrder };
      copy.patient_id = null;
      patientOrder.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenOrderTitleIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...patientOrder };
      copy.order_title = null;
      patientOrder.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenDescriptionIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...patientOrder };
      copy.description = null;
      patientOrder.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenCreatedDateIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...patientOrder };
      copy.created_date = null;
      patientOrder.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenModifiedDateIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...patientOrder };
      copy.modified_date = null;
      patientOrder.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });
});
