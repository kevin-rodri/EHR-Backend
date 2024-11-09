/* 
Name: Kevin Rodriguez
Date: 11/4/2024 
Description: Unit tests for the Section model.
*/
const Section = require("../../models/Section");
const User = require("../../models/User");
const Patient = require("../../models/Patient");
const setupAssociations = require("../../associations");

describe("Section Unit Test", () => {
  let sectionTest = null;
  let studentUserTest = null;
  let adminUserTest = null;
  let patientTest = null;

  // sets up the necessary objects needed for the tests
  // Why not have fun with this. :) 
  beforeEach(() => {
    studentUserTest = new User({
      user_id: "6ccd780c-baba-1026-9564-5b8c656024db",
      username: "the_mermaid_man",
      password: "the_actual_mermaid_man",
      full_name: "Mermaid Man",
      role: "STUDENT",
    });

    adminUserTest = new User({
      user_id: "6ccd780c-baba-1026-9564-5b8c676018db",
      username: "the_barnacle_boy",
      password: "the_actual_barnacle_boy",
      full_name: "Barnacle Boy",
      role: "ADMIN",
    });

    patientTest = new Patient({
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

    sectionTest = new Section({
      section_id: "6ccer80c-baba-1026-9514-5b8c656024db",
      section_name: "Mermaid Man and Barnacle Boy Fan Club",
      user_id: adminUserTest.user_id,
      patient_id: "6ccd780c-baba-1026-9564-5b8c659018db",
    });
    setupAssociations();
    patientTest.section_id = sectionTest.section_id;
  });

  // Ensure we have a section with the correct information
  test("CreatesSection_WhenAllConditionsMet_ReturnsObject", () => {
    //Assert
    expect(sectionTest).not.toBeNull();
    expect(sectionTest.section_id).toBe("6ccer80c-baba-1026-9514-5b8c656024db");
    expect(sectionTest.section_name).toBe("Mermaid Man and Barnacle Boy Fan Club");
    expect(sectionTest.user_id).toBe("6ccd780c-baba-1026-9564-5b8c676018db");
    expect(sectionTest.patient_id).toBe("6ccd780c-baba-1026-9564-5b8c659018db");
  });

  // verifies that the user in the section is an admin
  test("CreatesSection_WhenAllConditionsMet_ReturnsUserID", () => {
    expect(sectionTest.user_id).toBe(adminUserTest.user_id);
  });

  // adding a student user to the section
  test("CreatesSection_WhenAllConditionsMet_ReturnsSectionRoster", () => {
    // Mock the addUser function
    // Source: https://jestjs.io/docs/mock-functions
    sectionTest.addUser = jest.fn();
    sectionTest.users = [adminUserTest];

    sectionTest.addUser(studentUserTest);
    sectionTest.users.push(studentUserTest);

    // We should have a student and an admin in the section. This is to depict what a section would look like.
    expect(sectionTest.users.length).toBe(2);
    expect(sectionTest.users).toEqual(
      expect.arrayContaining([adminUserTest, studentUserTest])
    );
  });

  // verifies that the patient in the section and the patient has been assigned to the section (vice versa)
  test("CreatesSection_WhenAllConditionsMet_ReturnsSectionPatient", () => {
    expect(sectionTest.patient_id).toBe(patientTest.patient_id);
    expect(patientTest.section_id).toBe(sectionTest.section_id);
  });

  // These tests should verify that non-null fields are required!
  test("Section ID is required", () => {
    try {
      const copy = { ...sectionTest };
      copy.section_id = null;
      sectionTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("Section Name is required", () => {
    try {
      const copy = { ...sectionTest };
      copy.section_name = null;
      sectionTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("Section User ID is required", () => {
    try {
      const copy = { ...sectionTest };
      copy.user_id = null;
      sectionTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("Section Patient ID is required", () => {
    try {
      const copy = { ...sectionTest };
      copy.patient_id = null;
      sectionTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });
});
