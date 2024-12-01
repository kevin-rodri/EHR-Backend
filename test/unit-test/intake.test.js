/* 
Name: Dylan Bellinger
Date: 11/24/2024 
Description: Intake model unit tests.
*/
const { models } = require("../../models");

describe("Intake Unit Test", () => {
  let patient = null;
  let intake = null;
  let date = new Date();

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

    intake = new models.Intake({
      patient_id: patient.id,
      type: "PO",
      amount: 10,
      date_and_time_taken: date.valueOf(),
    });
  });

  test("CreatesIntake_WhenAllConditionsMet_ReturnsObject", () => {
    expect(intake.type).toBe("PO");
    expect(intake.amount).toBe(10);
    expect(intake.date_and_time_taken).toBe(date.valueOf());
  });

  test("CreatesIntake_WhenAllConditionsMet_ReturnsIntakeBelongsToPatient", () => {
    expect(intake.patient_id).toBe(patient.id);
  });

  test("CreatesIntake_WhenAllConditionsMet_ReturnsTypeTubeFeeding", () => {
    const copy = { ...intake };
    copy.type = "TUBE FEEDING";
    intake.validate();
    expect(copy.type).toBe("TUBE FEEDING");
  });

  test("CreatesIntake_WhenAllConditionsMet_ReturnsTypeIV", () => {
    const copy = { ...intake };
    copy.type = "IV";
    intake.validate();
    expect(copy.type).toBe("IV");
  });

  test("ThrowsError_WhenIntakeIdIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...intake };
      copy.intake_id = null;
      intake.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenPatientIdIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...intake };
      copy.patient_id = null;
      intake.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenTypeIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...intake };
      copy.type = null;
      intake.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenAmountIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...intake };
      copy.amount = null;
      intake.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenDateAndTimeTakenIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...intake };
      copy.date_and_time_taken = null;
      intake.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });
});
