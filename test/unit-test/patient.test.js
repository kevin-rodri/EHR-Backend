/* 
Name: Dylan Bellinger
Date: 11/11/2024 
Description: Patient model unit tests.
*/
const { models } = require("../../models");

describe("Patient Unit Test", () => {

    let patientTest = null;
    let date = new Date();

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

    test("CreatesPatient_WhenAllConditionsMet_ReturnsObject", () => {
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

    test("CreatesPatient_WhenAllConditionsMet_ReturnsPatientCodeStatusDoesNotResuscitate", () => {
        const copy = { ...patientTest };
        copy.code_status = "DOES-NOT-RESUSCITATE";
        patientTest.validate();
        expect(copy.code_status).toBe("DOES-NOT-RESUSCITATE");
    });

    test("CreatesPatient_WhenAllConditionsMet_ReturnsPatientPreacutionDroplet", () => {
        const copy = { ...patientTest };
        copy.precautions = "DROPLET";
        patientTest.validate();
        expect(copy.precautions).toBe("DROPLET");
    });

    test("ThrowsError_WhenPatientIDIsNull_ReturnsValidationError", () => {
        try {
            const copy = { ...patientTest };
            copy.patient_id = null;
            patientTest.validate();
        } catch (err) {
            expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenDateOfBirthIsNull_ReturnsValidationError", () => {
        try {
            const copy = { ...patientTest };
            copy.date_of_birth = null;
            patientTest.validate();
        } catch (err) {
            expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenReligionIsNull_ReturnsValidationError", () => {
        try {
            const copy = { ...patientTest };
            copy.religion = null;
            patientTest.validate();
        } catch (err) {
            expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenFullNameIsNull_ReturnsValidationError", () => {
        try {
            const copy = { ...patientTest };
            copy.full_name = null;
            patientTest.validate();
        } catch (err) {
            expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenWeightIsNull_ReturnsValidationError", () => {
        try {
            const copy = { ...patientTest };
            copy.weight = null;
            patientTest.validate();
        } catch (err) {
            expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenHeightIsNull_ReturnsValidationError", () => {
        try {
            const copy = { ...patientTest };
            copy.height = null;
            patientTest.validate();
        } catch (err) {
            expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenInsuranceIsNull_ReturnsValidationError", () => {
        try {
            const copy = { ...patientTest };
            copy.has_insurance = null;
            patientTest.validate();
        } catch (err) {
            expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenAdvancedDirectivesIsNull_ReturnsValidationError", () => {
        try {
            const copy = { ...patientTest };
            copy.has_advanced_directives = null;
            patientTest.validate();
        } catch (err) {
            expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenEmergencyContactFullNameIsNull_ReturnsValidationError", () => {
        try {
            const copy = { ...patientTest };
            copy.emergency_contact_full_name = null;
            patientTest.validate();
        } catch (err) {
            expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenEmergencyContactNumberIsNull_ReturnsValidationError", () => {
        try {
            const copy = { ...patientTest };
            copy.emergency_contact_phone_number = null;
            patientTest.validate();
        } catch (err) {
            expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenCodeStatusIsNull_ReturnsValidationError", () => {
        try {
            const copy = { ...patientTest };
            copy.code_status = null;
            patientTest.validate();
        } catch (err) {
            expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenPrecautionsIsNull_ReturnsValidationError", () => {
        try {
            const copy = { ...patientTest };
            copy.precautions = null;
            patientTest.validate();
        } catch (err) {
            expect(err.errors).toBeDefined();
        }
    });
});