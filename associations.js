const User = require("./models/User");
const Section = require("./models/Section");
const Patient = require("./models/Patient");

function setupAssociations() {
  User.hasMany(Section, { foreignKey: 'user_id' });
  Section.belongsTo(User, { foreignKey: 'user_id' });

  // Patient-Section associations
  Patient.hasMany(Section, { foreignKey: 'patient_id' });
  Section.belongsTo(Patient, { foreignKey: 'patient_id' });
}

module.exports = setupAssociations;
