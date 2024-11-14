/* 
Name: Dylan Bellinger
Date: 11/9/2024 
Description: User model unit tests.
*/
const User = require("../../models/User");

describe("User Unit Test", () => {
  let studentUserTest = null;

  beforeEach(() => {
    studentUserTest = new User({
      user_id: "6ccd780c-baba-1026-9564-5b8c656024db",
      username: "the_sherlock_holmes",
      password: "the_real_sherlock_holmes",
      full_name: "Sherlock Holmes",
      role: "STUDENT",
    });
  });

  test("CreatesUser_WhenAllConditionsMet_ReturnsObject", () => {
    expect(studentUserTest.user_id).toBe(
      "6ccd780c-baba-1026-9564-5b8c656024db"
    );
    expect(studentUserTest.username).toBe("the_sherlock_holmes");
    expect(studentUserTest.password).toBe("the_real_sherlock_holmes");
    expect(studentUserTest.full_name).toBe("Sherlock Holmes");
    expect(studentUserTest.role).toBe("STUDENT");
  });

  test("CreatesUser_WhenAllConditionsMet_ReturnsStudentAdmin", () => {
    studentUserTest.role = "ADMIN";
    expect(studentUserTest.role).toBe("ADMIN");
  });

  test("ThrowsError_WhenUserIdIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...studentUserTest };
      copy.user_id = null;
      studentUserTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenUserNameIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...studentUserTest };
      copy.username = null;
      studentUserTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenPassWordIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...studentUserTest };
      copy.password = null;
      studentUserTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });

  test("ThrowsError_WhenPasswordIsNull_ReturnsValidationError", () => {
    try {
      const copy = { ...studentUserTest };
      copy.role = null;
      studentUserTest.validate();
    } catch (err) {
      expect(err.errors).toBeDefined();
    }
  });
});
