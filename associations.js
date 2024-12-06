/* 
Name: Kevin Rodriguez
Date: 11/4/2024 
Description: File is used to establish associations between models.
Note: This will set up will appearently add the foreign keys references to the models.
Per: https://github.com/sequelize/express-example/blob/master/express-main-example/sequelize/models/instrument.model.js
*/

function setupAssociations(sequelize) {
  const {
    User,
    Section,
    Patient,
    PatientOrders,
    VitalSigns,
    PatientPainScale,
    Intake,
    Assessments,
    GenitourinaryInfo,
    UrinaryDetails,
    DialysisInfo,
    Output,
    NeurologicalInfo,
    PupilInfo,
    ConsciousnessInfo,
    StrengthInfo,
  } = sequelize.models;

  // 1:N relationship between User and Section
  User.hasMany(Section, { foreignKey: "user_id" });
  Section.belongsTo(User, { foreignKey: "user_id" });

  // 1:N relationship between Patient and Section
  Patient.hasMany(Section, { foreignKey: "patient_id" });
  Section.belongsTo(Patient, { foreignKey: "patient_id" });

  // 1:N relationship between Patient and PatientOrder
  Patient.hasMany(PatientOrders, { foreignKey: "patient_id" });
  PatientOrders.belongsTo(Patient, { foreignKey: "patient_id" });

  // 1:N relationship between Patient and VitalSigns
  Patient.hasMany(VitalSigns, { foreignKey: "patient_id" });
  VitalSigns.belongsTo(Patient, { foreignKey: "patient_id" });

  // 1:1 relationship where VitalSigns has one PatientPainScale
  VitalSigns.hasOne(PatientPainScale, { foreignKey: "id" });
  PatientPainScale.belongsTo(VitalSigns, { foreignKey: "id" });

  // 1:N relationship between Intake and Patient
  Patient.hasMany(Intake, { foreignKey: "patient_id" });
  Intake.belongsTo(Patient, { foreignKey: "patient_id" });

  // 1:1 relationship between Assessments and Patient
  Assessments.hasOne(Patient, { foreignKey: "patient_id" });
  Patient.belongsTo(Assessments, { foreignKey: "patient_id" });

  // 1:1 relationship between GenitourinaryInfo and Assessments
  Assessments.hasOne(GenitourinaryInfo, { foreignKey: "assessment_id" });
  GenitourinaryInfo.belongsTo(Assessments, { foreignKey: "assessment_id" });

  // 1:1 relationship between GenitourinaryInfo and UrinaryDetails
  GenitourinaryInfo.hasOne(UrinaryDetails, { foreignKey: "genitourinary_id" });
  UrinaryDetails.belongsTo(GenitourinaryInfo, {
    foreignKey: "genitourinary_id",
  });

  // 1:1 relationship between GenitourinaryInfo and DialysisInfo
  GenitourinaryInfo.hasOne(DialysisInfo, { foreignKey: "genitourinary_id" });
  DialysisInfo.belongsTo(GenitourinaryInfo, { foreignKey: "genitourinary_id" });

  // 1:N relationship between Output and Patient
  Patient.hasMany(Output, { foreignKey: "patient_id" });
  Output.belongsTo(Patient, { foreignKey: "patient_id" });

  // 1:! relationship between Assessments and NeurologicalInfo
  Assessments.hasOne(NeurologicalInfo, { foreignKey: "assessment_id" });
  NeurologicalInfo.belongsTo(Assessments, { foreignKey: "assessment_id" });

  // 1:1 relationship between NeurologicalInfo and PupilInfo
  NeurologicalInfo.hasOne(PupilInfo, { foreignKey: "neurological_id" });
  PupilInfo.belongsTo(NeurologicalInfo, { foreignKey: "neurological_id" });

  // 1:1 relationship between NeurologicalInfo and ConsciousnessInfo
  NeurologicalInfo.hasOne(ConsciousnessInfo, { foreignKey: "neurological_id" });
  ConsciousnessInfo.belongsTo(NeurologicalInfo, {
    foreignKey: "neurological_id",
  });

  // 1:1 relationship between NeurologicalInfo and StrengthInfo
  NeurologicalInfo.hasOne(StrengthInfo, { foreignKey: "neurological_id" });
  StrengthInfo.belongsTo(NeurologicalInfo, { foreignKey: "neurological_id" });
}

module.exports = { setupAssociations };
