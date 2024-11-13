/* 
Name: Dylan Bellinger
Date: 11/11/2024 
Description: Patient model unit tests.
*/
const Patient = require("../models/Patient");

describe("Patient Test", () => {

    let patientTest = null;

    patientTest = new Patient({
        patient_id: "6ccd780c-baba-1026-9564-5b8c659018db",
        section_id: null,
        date_of_birth: "1910-01-11",
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

      test("Necessary Patient fields are not null", () => {
        expect(patientTest.patient_id).toBe("6ccd780c-baba-1026-9564-5b8c659018db");
        expect(patientTest.date_of_birth).toBe("1910-01-11");
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

    test("Modify_Code_Status", () => {
        const copy = { ...patientTest };
        copy.code_status = "DOES-NOT-RESUSCITATE";
        patientTest.validate();
        expect(copy.code_status).toBe("DOES-NOT-RESUSCITATE");
    });

    test("Modify_Precautions", () => {
        const copy = { ...patientTest };
        copy.precautions = "DROPLET";
        patientTest.validate();
        expect(copy.precautions).toBe("DROPLET");
    });

    test("Require_Patient_ID", () => {
        try {
            const copy = { ...patientTest };
            copy.patient_id = null;
            patientTest.validate();
        } catch (err) {
            expect(err.errors).toBeDefined();
        }
    });

    test("Require_Date_OF_Birth", () => {
        try {
            const copy = { ...patientTest };
            copy.date_of_birth = null;
            patientTest.validate();
        } catch (err) {
            expect(err.errors).toBeDefined();
        }
    });

    test("Require_Religion", () => {
        try {
            const copy = { ...patientTest };
            copy.religion = null;
            patientTest.validate();
        } catch (err) {
            expect(err.errors).toBeDefined();
        }
    });

    test("Require_Full_Name", () => {
        try {
            const copy = { ...patientTest };
            copy.full_name = null;
            patientTest.validate();
        } catch (err) {
            expect(err.errors).toBeDefined();
        }
    });

    test("Require_Weight", () => {
        try {
            const copy = { ...patientTest };
            copy.weight = null;
            patientTest.validate();
        } catch (err) {
            expect(err.errors).toBeDefined();
        }
    });

    test("Require_Height", () => {
        try {
            const copy = { ...patientTest };
            copy.height = null;
            patientTest.validate();
        } catch (err) {
            expect(err.errors).toBeDefined();
        }
    });

    test("Require_Insurance", () => {
        try {
            const copy = { ...patientTest };
            copy.has_insurance = null;
            patientTest.validate();
        } catch (err) {
            expect(err.errors).toBeDefined();
        }
    });

    test("Require_Advanced_Directives", () => {
        try {
            const copy = { ...patientTest };
            copy.has_advanced_directives = null;
            patientTest.validate();
        } catch (err) {
            expect(err.errors).toBeDefined();
        }
    });

    test("Require_Emergency_Contact_Full_Name", () => {
        try {
            const copy = { ...patientTest };
            copy.emergency_contact_full_name = null;
            patientTest.validate();
        } catch (err) {
            expect(err.errors).toBeDefined();
        }
    });

    test("Require_Emergency_Contact_Number", () => {
        try {
            const copy = { ...patientTest };
            copy.emergency_contact_phone_number = null;
            patientTest.validate();
        } catch (err) {
            expect(err.errors).toBeDefined();
        }
    });

    test("Require_Code_Status", () => {
        try {
            const copy = { ...patientTest };
            copy.code_status = null;
            patientTest.validate();
        } catch (err) {
            expect(err.errors).toBeDefined();
        }
    });

    test("Require_Precautions", () => {
        try {
            const copy = { ...patientTest };
            copy.precautions = null;
            patientTest.validate();
        } catch (err) {
            expect(err.errors).toBeDefined();
        }
    });
});