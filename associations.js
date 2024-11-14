/* 
Name: Kevin Rodriguez
Date: 11/4/2024 
Description: File is used to establish associations between models.
*/
const User = require("./models/User");
const Section = require("./models/Section");
const Patient = require("./models/Patient");
const PatientOrder = require("./models/PatientOrders");

function setupAssociations() {
  // 1:N relationship between User and Section
  User.hasMany(Section, { foreignKey: "user_id" });
  Section.belongsTo(User, { foreignKey: "user_id" });

  // 1:N relationship between Patient and Section
  Patient.hasMany(Section, { foreignKey: "patient_id" });
  Section.belongsTo(Patient, { foreignKey: "patient_id" });

  // 1:N relationship between Patient and PatientOrder
  Patient.hasMany(PatientOrder, { foreignKey: "patient_id" });
  PatientOrder.belongsTo(Patient, { foreignKey: "patient_id" });
}

module.exports = setupAssociations;
