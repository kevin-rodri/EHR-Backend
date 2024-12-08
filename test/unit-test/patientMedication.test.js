/* 
Name: Charlize Aponte
Date: 11/28/2024 
Description: Unit tests for the Patient Medications model.
*/
const { models } = require("../../models");

describe("Patient Medications Unit", () => {
  let patient = null;
  let medication = null;
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

    medication = new models.PatientMedications({
      patient_id: patient.id,
      drug_name: "Ibuprofen",
      scheduled_time: date,
      dose: "500mg",
      route: "Oral",
      med_name: "advil",
      is_scheduled: "True", 
      created_by: "Charlize",
      created_date: date,
      modified_by: "Charlize",
      modified_date: date
    });
  });

  test("CreatesPatientMedication_WhenAllConditionsMet_ReturnsObject", () => {
    expect(medication.patient_id).toBe(patient.id);
    expect(medication. drug_name).toBe("Ibuprofen");
    expect(medication.scheduled_time).toBe(date)
    expect(medication.dose).toBe("500mg");
    expect(medication.route).toBe("Oral");
    expect(medication.med_name).toBe("advil");
    expect(medication.is_scheduled).toBe("True");
    expect(medication.created_by).toBe("Charlize");
    expect(medication.modified_by).toBe("Charlize");
    expect(medication.created_date).toBe(date);
    expect(medication.modified_date).toBe(date);
  });

  test("MedicationBelongsToPatient_WhenAllConditionsMet_ReturnsTrue", () => {
    expect(medication.patient_id).toBe(patient.id);
  });



  test("ThrowsError_WhenPatientIdIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...medication };
      copy.patient_id = null;
      medication.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenMedicationNameIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...medication };
      copy.drug_name = null;
      medication.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenDosageIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...medication };
      copy.dose = null;
      medication.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenIsscheduledtimeIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...medication };
      copy.is_scheduled = null;
      medication.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenMedNameNull_ReturnsValidationError", () => {
    try {
      const copy = { ...medication };
      copy.med_name = null;
      medication.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenRouteIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...medication };
      copy.route = null;
      medication.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenCreatedDateIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...medication };
      copy.created_date = null;
      medication.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenMODIFIEDDateIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...medication };
      copy.modified_date = null;
      medication.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });


  test("ThrowsError_WhencREATEDBYIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...medication };
      copy.created_by = null;
      medication.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });


  test("ThrowsError_WhenMODIFIEDBYIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...medication };
      copy.modified_by = null;
      medication.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });
});
