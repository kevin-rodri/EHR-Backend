/* 
Name: Kevin Rodriguez
Date: 11/4/2024 
Description: File is used to establish associations between models.
*/
const User = require("./models/User");
const Section = require("./models/Section");
const Patient = require("./models/Patient");

function setupAssociations() {
  // foreign key associations
  User.hasMany(Section, { foreignKey: "user_id" });
  Section.belongsTo(User, { foreignKey: "user_id" });

  // Reference associations needed
  Patient.hasMany(Section, { foreignKey: "patient_id" });
  Section.belongsTo(Patient, { foreignKey: "patient_id" });
}

module.exports = setupAssociations;
