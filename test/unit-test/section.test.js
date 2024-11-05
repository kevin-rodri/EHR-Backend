const Section = require("../models/Section");
const User = require("../models/User");
const Patient = require("../models/Patient");

describe("Section Test", () => {
  let sectionTest = null;
  let setudentUserTest = null;
  let adminUserTest = null;
  let patientTest = null;

  beforeEach(() => {
    setudentUserTest = new User({
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
});
