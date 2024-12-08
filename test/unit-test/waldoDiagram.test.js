/* 
Name: Charlize Aponte
Date: 12/7/2024 
Description: Unit tests for the WALDO Diagram model.
*/

const { models } = require("../../models");

describe("Waldo Diagram Unit", () => {
  let patient = null;
  let waldoEntry = null;
  const date = new Date();

  beforeEach(async () => {
    patient = new models.Patient({
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

    waldoEntry = new models.WALDO_Diagram({
      patient_id: patient.id,
      wound_drain_locations:
      {
        woundDrain1: "left arm",
        woundDrain2: "right hand",
    },
      surgical_wound_note: "notes on surgical_wound_note",
      pressure_sore_note: "notes on pressure_sore_note",
      trauma_wound_note: "notes on trauma wounds notes",
      drain_note: "notes on drains",
      created_by: "Charlize",
      modified_by: "Charlize",
      created_date: date,
      modified_date: date,
    });
  });

  test("CreatesWaldoEntry_WhenAllConditionsMet_ReturnsObject", () => {
    expect(waldoEntry.patient_id).toBe(patient.id);
    expect(waldoEntry.wound_drain_locations.woundDrain1).toBe("left arm");
    expect(waldoEntry.wound_drain_locations.woundDrain2).toBe("right hand");
    expect(waldoEntry.surgical_wound_note).toBe("notes on surgical_wound_note");
    expect(waldoEntry.pressure_sore_note).toBe("notes on pressure_sore_note");
    expect(waldoEntry.trauma_wound_note).toBe("notes on trauma wounds notes");
    expect(waldoEntry.drain_note).toBe("notes on drains");
    expect(waldoEntry.created_by).toBe("Charlize");
    expect(waldoEntry.modified_by).toBe("Charlize");
    expect(waldoEntry.created_date).toBe(date);
    expect(waldoEntry.modified_date).toBe(date);
  });

  test("CreatesWaldoEntry_WhenAllConditionsMet_ReturnsWaldoEntryBelongsToPatient", () => {
    expect(waldoEntry.patient_id).toBe(patient.id);
  });

  test("ThrowsError_WhenPatientIdIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...waldoEntry };
      copy.patient_id = null;
      waldoEntry.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenWALDODRAINLOCATIONSIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...waldoEntry };
      copy.wound_drain_locations = null;
      waldoEntry.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenSurgicalNotesIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...waldoEntry };
      copy.surgical_wound_note = null;
      waldoEntry.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenPressureNotesIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...waldoEntry };
      copy.pressure_sore_note= null;
      waldoEntry.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenTraumaNotesIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...waldoEntry };
      copy.trauma_wound_note = null;
      waldoEntry.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenDrainNotesIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...waldoEntry };
      copy.drain_note = null;
      waldoEntry.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenCreatedByIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...waldoEntry };
      copy.created_by = null;
      waldoEntry.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });
  test("ThrowsError_WhenModifiedByeIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...waldoEntry };
      copy.modified_by = null;
      waldoEntry.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });
  test("ThrowsError_WhenCreatedDateIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...waldoEntry };
      copy.created_date = null;
      waldoEntry.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenModifiedDateIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...waldoEntry };
      copy.modified_date = null;
      waldoEntry.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });
});
