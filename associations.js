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
    SectionRoster,
    SectionPatient,
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
    IV_and_Lines,
    NeurologicalInfo,
    PupilInfo,
    ConsciousnessInfo,
    StrengthInfo,
    GastrointestinalInfo,
    ADL,
    PatientHistory,
    Note,
    MusculoskeletalInfo,
    PatientMedications,
    WALDO_Diagram,
    LabValues,
    RespiratoryInfo,
    Lungs,
    OxygenSupport,
    SputumChestTubes,
  } = sequelize.models;

  // 1:N relationship between Section and User
  User.hasMany(Section, { foreignKey: "instructor_id" });
  Section.belongsTo(User, { foreignKey: "instructor_id" });  

  // 1:1 relationship between SectionRoster and Section
  Section.hasMany(SectionRoster, { foreignKey: "section_id" });
  SectionRoster.belongsTo(Section, { foreignKey: "section_id" });

  // 1:N relationship between SectionRoster and User
  SectionRoster.belongsTo(User, { foreignKey: "user_id" });
  User.hasMany(SectionRoster, { foreignKey: "user_id" });
  
  // 1:N relationship between SectionPatient and Section
  Section.hasMany(SectionPatient, { foreignKey: "section_id" });
  SectionPatient.belongsTo(Section, { foreignKey: "section_id" });

  // 1:N relationship between SectionPatient and Patient
  Patient.hasMany(SectionPatient, { foreignKey: "patient_id" });
  SectionPatient.belongsTo(Patient, { foreignKey: "patient_id" });

  //STAY
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

  // 1:N relationship between IV and Lines and Patient
  Patient.hasMany(IV_and_Lines, { foreignKey: "patient_id" });
  IV_and_Lines.belongsTo(Patient, { foreignKey: "patient_id" });

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

  // 1:N relationship between IV and Lines and Patient
  Patient.hasMany(ADL, { foreignKey: "patient_id" });
  ADL.belongsTo(Patient, { foreignKey: "patient_id" });

  // 1:1 relationship between NeurologicalInfo and StrengthInfo
  NeurologicalInfo.hasOne(StrengthInfo, { foreignKey: "neurological_id" });
  StrengthInfo.belongsTo(NeurologicalInfo, { foreignKey: "neurological_id" });

  // 1:1 relationship between GastrointestinalInfo and Assessments
  Assessments.hasOne(GastrointestinalInfo, { foreignKey: "assessment_id" });
  GastrointestinalInfo.belongsTo(Assessments, { foreignKey: "assessment_id" });

  Patient.hasMany(ADL, { foreignKey: "patient_id" });
  ADL.belongsTo(Patient, { foreignKey: "patient_id" });

  // STAY
  Patient.hasMany(PatientHistory, { foreignKey: "patient_id" });
  PatientHistory.belongsTo(Patient, { foreignKey: "patient_id" });

  Patient.hasMany(Note, { foreignKey: "patient_id" });
  Note.belongsTo(Patient, { foreignKey: "patient_id" });

  // 1:1 relationship between MusculoskeletalInfo and Assessments
  Assessments.hasOne(MusculoskeletalInfo, { foreignKey: "assessment_id" });
  MusculoskeletalInfo.belongsTo(Assessments, { foreignKey: "assessment_id" });

  // 1:N relationship between Patient and PatientMedication
  Patient.hasMany(PatientMedications, { foreignKey: "patient_id" });
  PatientMedications.belongsTo(Patient, { foreignKey: "patient_id" });

  // 1:N relationship between Patient and Waldo diagram
  Patient.hasMany(WALDO_Diagram, { foreignKey: "patient_id" });
  WALDO_Diagram.belongsTo(Patient, { foreignKey: "patient_id" });

  // 1:N relationship between Patient and lab Values
  Patient.hasMany(LabValues, { foreignKey: "patient_id" });
  LabValues.belongsTo(Patient, { foreignKey: "patient_id" });

  // 1:1 relationship between RespiratoryInfo and Assessments
  Assessments.hasOne(RespiratoryInfo, { foreignKey: "assessment_id" });
  RespiratoryInfo.belongsTo(Assessments, { foreignKey: "assessment_id" });

  // 1:1 relationship between RespiratoryInfo and Lungs
  RespiratoryInfo.hasOne(Lungs, { foreignKey: "respiratory_id" });
  Lungs.belongsTo(RespiratoryInfo, { foreignKey: "respiratory_id" });

  // 1:1 relationship between RespiratoryInfo and OxygenSupport
  RespiratoryInfo.hasOne(OxygenSupport, { foreignKey: "respiratory_id" });
  OxygenSupport.belongsTo(RespiratoryInfo, { foreignKey: "respiratory_id" });

  // 1:1 relationship between RespiratoryInfo and SputumChestTubes
  RespiratoryInfo.hasOne(SputumChestTubes, { foreignKey: "respiratory_id" });
  SputumChestTubes.belongsTo(RespiratoryInfo, { foreignKey: "respiratory_id" });
}

module.exports = { setupAssociations };
