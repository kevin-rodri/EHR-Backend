const User = require("../../models/User");
const Section = require("../../models/Section");

describe("User Test", () => {


  let studentUserTest = null;
  let adminUserTest = null;

  beforeEach(() => {

    studentUserTest = new User({
      user_id: "6ccd780c-baba-1026-9564-5b8c656024db",
      username: "the_sherlock_holmes",
      password: "the_real_sherlock_holmes",
      full_name: "Sherlock Holmes",
      role: "STUDENT",
    });

    adminUserTest = new User({
      user_id: "6ccd780c-baba-1026-9564-5b8c676018db",
      username: "the_john_watson",
      password: "the_real_john_watson",
      full_name: "John Watson",
      role: "ADMIN",
    });

  });

  test("User fields not null", () => {
    expect(studentUserTest.user_id).toBe("6ccd780c-baba-1026-9564-5b8c656024db");
    expect(studentUserTest.username).toBe("the_sherlock_holmes");
    expect(studentUserTest.password).toBe("the_real_sherlock_holmes");
    expect(studentUserTest.full_name).toBe("Sherlock Holmes");
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