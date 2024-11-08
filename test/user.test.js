const User = require("../models/User");
const Section = require("../models/Section");

describe("User Test", () => {


  let studentUserTest = null;
  let adminUserTest = null;
  
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

  });

  test("User fields not null", () => {
    expect(studentUserTest.user_id).toBe("6ccd780c-baba-1026-9564-5b8c656024db");
    expect(studentUserTest.username).toBe("the_mermaid_man");
    expect(studentUserTest.password).toBe("the_actual_mermaid_man");
    expect(studentUserTest.full_name).toBe("Mermaid Man");
    expect(studentUserTest.role).toBe("STUDENT");
  });

  test("Modify user role", () => {
    const copy = { ...studentUserTest };
    copy.role = "ADMIN";
    studentUserTest.validate();
    expect(copy.role).toBe("ADMIN");
  });

  test("Require User ID", () => {
    try {
      const copy = { ...studentUserTest };
      copy.user_id = null;
      studentUserTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });


  test("Require Username", () => {
    try {
      const copy = { ...studentUserTest };
      copy.username = null;
      studentUserTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("Require Password", () => {
    try {
      const copy = { ...studentUserTest };
      copy.password = null;
      studentUserTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });


  test("Require Role", () => {
    try {
      const copy = { ...studentUserTest };
      copy.role = null;
      studentUserTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

});