/* 
Name: Dylan Bellinger
Date: 12/2/2024 
Description: Output model unit tests.
*/
const { models } = require("../../models");

describe("Output Unit Test", () => {
    let patient = null;
    let output = null;
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

        output = new models.Output({
            patient_id: patient.id,
            type: "URINE VOIDED",
            amount: 100,
            date_and_time_taken: date.valueOf(),
        });
    });

    test("CreatesOutput_WhenAllConditionsMet_ReturnsObject", () => {
        expect(output.type).toBe("URINE VOIDED");
        expect(output.amount).toBe(100);
        expect(output.date_and_time_taken).toBe(date.valueOf());
    });

    test("CreatesOutput_WhenAllConditionsMet_ReturnsOutputBelongsToPatient", () => {
        expect(output.patient_id).toBe(patient.id);
    });

    test("CreatesOutput_WhenAllConditionsMet_ReturnsTypeFoley", () => {
        const copy = { ...output };
        copy.type = "FOLEY";
        output.validate();
        expect(copy.type).toBe("FOLEY");
    });

    test("ThrowsError_WhenOutputIdIsNull_ReturnsValidationError", () => {
        try {
            const copy = { ...output };
            copy.id = null;
            output.validate();
        } catch (err) {
            expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenPatientIdIsNull_ReturnsValidationError", () => {
        try {
            const copy = { ...output };
            copy.patient_id = null;
            output.validate();
        } catch (err) {
            expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenTypeIsNull_ReturnsValidationError", () => {
        try {
            const copy = { ...output };
            copy.type = null;
            output.validate();
        } catch (err) {
            expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenAmountIsNull_ReturnsValidationError", () => {
        try {
            const copy = { ...output };
            copy.amount = null;
            output.validate();
        } catch (err) {
            expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenDateAndTimeTakenIsNull_ReturnsValidationError", () => {
        try {
            const copy = { ...output };
            copy.date_and_time_taken = null;
            output.validate();
        } catch (err) {
            expect(err.errors).toBeDefined();
        }
    });
});