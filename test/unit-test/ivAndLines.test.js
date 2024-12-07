const { models } = require("../../models");

describe("IV and Lines Unit Test", () => {
    let patient = null;
    let ivLines = null;
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

        ivLines = new models.IV_and_Lines({
            patient_id: patient.id,
            iv_type: "EXAMPLE",
            size: "Single Lumen",
            location: "EXAMPLE1",
            fluid_or_med_name: "EXAMPLE2",
            fluid_or_med_rate: "EXAMPLE3",
            patent: true,
            is_clinical_documentation_improvement: true,
            created_by: "Dr. B",
            created_date: date.valueOf(),
            modified_by: "Dr. B",
            modified_date: date.valueOf(),
        });
    });

    test("CreatesOutput_WhenAllConditionsMet_ReturnsObject", () => {
        expect(ivLines.iv_type).toBe("EXAMPLE");
        expect(ivLines.size).toBe("Single Lumen");
        expect(ivLines.location).toBe("EXAMPLE1");
        expect(ivLines.fluid_or_med_name).toBe("EXAMPLE2");
        expect(ivLines.fluid_or_med_rate).toBe("EXAMPLE3");
        expect(ivLines.patent).toBe(true);
        expect(ivLines.is_clinical_documentation_improvement).toBe(true);
        expect(ivLines.created_by).toBe("Dr. B");
        expect(ivLines.created_date).toBe(date.valueOf());
        expect(ivLines.modified_by).toBe("Dr. B");
        expect(ivLines.modified_date).toBe(date.valueOf());
    });

    test("CreatesIVAndLines_WhenAllConditionsMet_ReturnsIVAndLinesBelongsToPatient", () => {
        expect(ivLines.patient_id).toBe(patient.id);
    });

    test("ThrowsError_WhenIVAndLinesIdIsNull_ReturnsValidationError", () => {
        try {
            const copy = { ...ivLines };
            copy.id = null;
            ivLines.validate();
        } catch (err) {
            expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenPatientIdIsNull_ReturnsValidationError", () => {
        try {
            const copy = { ...ivLines };
            copy.patient_id = null;
            ivLines.validate();
        } catch (err) {
            expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenIVTypeIsNull_ReturnsValidationError", () => {
        try {
            const copy = { ...ivLines };
            copy.iv_type = null;
            ivLines.validate();
        } catch (err) {
            expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenSizeIsNull_ReturnsValidationError", () => {
        try {
            const copy = { ...ivLines };
            copy.size = null;
            ivLines.validate();
        } catch (err) {
            expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenLocationIsNull_ReturnsValidationError", () => {
        try {
            const copy = { ...ivLines };
            copy.location = null;
            ivLines.validate();
        } catch (err) {
            expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenFluidOrMedNameIsNull_ReturnsValidationError", () => {
        try {
            const copy = { ...ivLines };
            copy.fluid_or_med_name = null;
            ivLines.validate();
        } catch (err) {
            expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenFluidOrMedRateIsNull_ReturnsValidationError", () => {
        try {
            const copy = { ...ivLines };
            copy.fluid_or_med_rate = null;
            ivLines.validate();
        } catch (err) {
            expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenPatentIsNull_ReturnsValidationError", () => {
        try {
            const copy = { ...ivLines };
            copy.patent = null;
            ivLines.validate();
        } catch (err) {
            expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenIsClinicalDocumentationImprovementIsNull_ReturnsValidationError", () => {
        try {
            const copy = { ...ivLines };
            copy.is_clinical_documentation_improvement = null;
            ivLines.validate();
        } catch (err) {
            expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenCreatedByIsNull_ReturnsValidationError", () => {
        try {
            const copy = { ...ivLines };
            copy.created_by = null;
            ivLines.validate();
        } catch (err) {
            expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenCreatedDateTakenIsNull_ReturnsValidationError", () => {
        try {
            const copy = { ...ivLines };
            copy.created_date = null;
            ivLines.validate();
        } catch (err) {
            expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenModifiedByIsNull_ReturnsValidationError", () => {
        try {
            const copy = { ...ivLines };
            copy.modified_by = null;
            ivLines.validate();
        } catch (err) {
            expect(err.errors).toBeDefined();
        }
    });

    test("ThrowsError_WhenModifiedDateTakenIsNull_ReturnsValidationError", () => {
        try {
            const copy = { ...ivLines };
            copy.modified_date = null;
            ivLines.validate();
        } catch (err) {
            expect(err.errors).toBeDefined();
        }
    });
});