/* 
Name: Kevin Rodriguez
Date: 11/30/2024 
Description: Unit tests for the dialysis Info model.
*/

const { models } = require("../../models");

describe("Dialysis Info Unit Test", () => {
  let dialysisInfo = null;
  let assessmentTest = null;
  let patientTest = null;
  let genitourinaryInfoTest = null;
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

    genitourinaryInfoTest = new models.GenitourinaryInfo({
      assessment_id: assessmentTest.id,
      created_by: "Ruby ElKharboutly",
      created_date: date.valueOf(),
      modified_by: "Ruby ElKharboutly",
      modified_date: date.valueOf(),
    });

    dialysisInfo = new models.DialysisInfo({
      genitourinary_id: genitourinaryInfoTest.id,
      has_dialysis: true,
      date_of_last_treatment: date.valueOf(),
      dialysis_access_type: "Arteriovenous Fistula",
      has_dialysis_access_dressing_cdi: true,
      foley_catheter: "Indwelling Foley catheter in place",
      urinary_diversion_notes:
        "Patient has a urinary diversion stoma with no complications noted.",
      foley_removed: date.valueOf(),
    });
  });

  // verify that a dialysis info object is created
  test("CreatesDialysisInfo_WhenAllConditionsMet_ReturnsObject", () => {
    expect(dialysisInfo.has_dialysis).toBe(true);
    expect(dialysisInfo.date_of_last_treatment).toBe(date.valueOf());
    expect(dialysisInfo.dialysis_access_type).toBe("Arteriovenous Fistula");
    expect(dialysisInfo.has_dialysis_access_dressing_cdi).toBe(true);
    expect(dialysisInfo.foley_catheter).toBe(
      "Indwelling Foley catheter in place"
    );
    expect(dialysisInfo.urinary_diversion_notes).toBe(
      "Patient has a urinary diversion stoma with no complications noted."
    );
    expect(dialysisInfo.foley_removed).toBe(date.valueOf());
  });

  // lets see if it's properly associated with the genitourinary info
  test("CreatesDialysisInfo_WhenAllConditionsMet_ReturnsVitalSignsBelongsToPatient", () => {
    expect(dialysisInfo.genitourinary_id).toBe(genitourinaryInfoTest.id);
    expect(genitourinaryInfoTest.created_by).toBe("Ruby ElKharboutly");
    expect(genitourinaryInfoTest.modified_by).toBe("Ruby ElKharboutly");
    expect(genitourinaryInfoTest.created_date).toBe(date.valueOf());
    expect(genitourinaryInfoTest.modified_date).toBe(date.valueOf());
  });

  // verify that the genitourinary info belongs to an assessment
  test("CreatesGenitourinaryInfo_WhenAllConditionsMet_ReturnsObject", () => {
    expect(genitourinaryInfoTest.assessment_id).toBe(assessmentTest.id);
  });

  // verify that the assessment belongs to a patient
  test("CreatesAssessment_WhenAllConditionsMet_ReturnsObject", () => {
    expect(assessmentTest.patient_id).toBe(patientTest.id);
  });

  // check for patient 
  test("CreatesAssessment_WhenAllConditionsMet_ReturnsPatientObject", () => {
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

  // now check for non-nullable fields
    test("ThrowsError_WhenGenitourinaryIdIsNull_ReturnsValidationError", () => {
        try {
        const copy = { ...dialysisInfo };
        copy.genitourinary_id = null;
        dialysisInfo.validate();
        } catch (err) {
        expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenHasDialysisIsNull_ReturnsValidationError", () => {
        try {
        const copy = { ...dialysisInfo };
        copy.has_dialysis = null;
        dialysisInfo.validate();
        } catch (err) {
        expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenDateOfLastTreatmentIsNull_ReturnsValidationError", () => {
        try {
        const copy = { ...dialysisInfo };
        copy.date_of_last_treatment = null;
        dialysisInfo.validate();
        } catch (err) {
        expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenDialysisAccessTypeIsNull_ReturnsValidationError", () => {
        try {
        const copy = { ...dialysisInfo };
        copy.dialysis_access_type = null;
        dialysisInfo.validate();
        } catch (err) {
        expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenHasDialysisAccessDressingCdiIsNull_ReturnsValidationError", () => {
        try {
        const copy = { ...dialysisInfo };
        copy.has_dialysis_access_dressing_cdi = null;
        dialysisInfo.validate();
        } catch (err) {
        expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenFoleyCatheterIsNull_ReturnsValidationError", () => {
        try {
        const copy = { ...dialysisInfo };
        copy.foley_catheter = null;
        dialysisInfo.validate();
        } catch (err) {
        expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenUrinaryDiversionNotesIsNull_ReturnsValidationError", () => {
        try {
        const copy = { ...dialysisInfo };
        copy.urinary_diversion_notes = null;
        dialysisInfo.validate();
        } catch (err) {
        expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenFoleyRemovedIsNull_ReturnsValidationError", () => {
        try {
        const copy = { ...dialysisInfo };
        copy.foley_removed = null;
        dialysisInfo.validate();
        } catch (err) {
        expect(err.errors).toBeDefined();
        }
    });
});
