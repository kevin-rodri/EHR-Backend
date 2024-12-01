/* 
Name: Kevin Rodriguez
Date: 11/30/2024 
Description: Unit tests for the assessments model.
*/

const { models } = require("../../models");

describe("Assessments Unit Test", () => {
    let assessment = null;
    let patientTest = null;
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
            precautions: "CONTACT"
        });
        assessment = new models.Assessments({
            patient_id: patientTest.id
        });
    });

    test("CreatesAssessment_WhenAllConditionsMet_ReturnsObject", () => {
        expect(assessment.patient_id).toBe(patientTest.id);
    });

    test("CreatesAssessment_WhenAllConditionsMet_ReturnsObject", () => {
        expect(assessment.patient_id).toBe(patientTest.id);
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

    // now check for non-nullable fields (in this case, patient_id)
    test("ThrowsError_WhenPatientIdIsNull_ReturnsValidationError", () => {
        try {
          const copy = { ...assessment };
          copy.patient_id = null;
          assessment.validate();
        } catch (err) {
          expect(err.errors).toBeDefined();
        }
      });
});