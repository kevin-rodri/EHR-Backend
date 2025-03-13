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
    PainScale,
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
    Medications,
    Intake_Output,
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

  // 1:N relationship between Patient and PatientOrder
  Patient.hasMany(PatientOrders, { foreignKey: "patient_id" });
  PatientOrders.belongsTo(Patient, { foreignKey: "patient_id" });

  Patient.hasMany(PatientHistory, { foreignKey: "patient_id" });
  PatientHistory.belongsTo(Patient, { foreignKey: "patient_id" });

  SectionPatient.hasMany(PatientMedications, {
    foreignKey: "section_patient_id",
  });
  PatientMedications.belongsTo(SectionPatient, {
    foreignKey: "section_patient_id",
  });

  // 1:N relationship between Medications and PatientMedications
  Medications.hasMany(PatientMedications, { foreignKey: "medication_id" });
  PatientMedications.belongsTo(Medications, { foreignKey: "medication_id" });

  // 1:N relationship between User and PatientMedications for created_by
  User.hasMany(PatientMedications, { foreignKey: "created_by" });
  PatientMedications.belongsTo(User, { foreignKey: "created_by" });

  // 1:N relationship between User and PatientMedications for modified_by
  User.hasMany(PatientMedications, { foreignKey: "modified_by" });
  PatientMedications.belongsTo(User, { foreignKey: "modified_by" });

  SectionPatient.hasMany(Intake_Output, { foreignKey: "section_patient_id" });
  Intake_Output.belongsTo(SectionPatient, { foreignKey: "section_patient_id" });

  // 1:N relationship between User and Intake_Output for created_by
  User.hasMany(Intake_Output, { foreignKey: "created_by" });
  Intake_Output.belongsTo(User, { foreignKey: "created_by" });

  // 1:N relationship between User and Intake_Output for modified_by
  User.hasMany(Intake_Output, { foreignKey: "modified_by" });
  Intake_Output.belongsTo(User, { foreignKey: "modified_by" });

  SectionPatient.hasMany(WALDO_Diagram, { foreignKey: "section_patient_id" });
  WALDO_Diagram.belongsTo(SectionPatient, { foreignKey: "section_patient_id" });

  // 1:N relationship between User and WALDO_Diagram for created_by
  User.hasMany(WALDO_Diagram, { foreignKey: "created_by" });
  WALDO_Diagram.belongsTo(User, { foreignKey: "created_by" });

  // 1:N relationship between User and WALDO_Diagram for modified_by
  User.hasMany(WALDO_Diagram, { foreignKey: "modified_by" });
  WALDO_Diagram.belongsTo(User, { foreignKey: "modified_by" });

  SectionPatient.hasMany(LabValues, { foreignKey: "section_patient_id" });
  LabValues.belongsTo(SectionPatient, { foreignKey: "section_patient_id" });

  // 1:N relationship between User and LabValues for created_by
  User.hasMany(LabValues, { foreignKey: "created_by" });
  LabValues.belongsTo(User, { foreignKey: "created_by" });

  // 1:N relationship between User and LabValues for modified_by
  User.hasMany(LabValues, { foreignKey: "modified_by" });
  LabValues.belongsTo(User, { foreignKey: "modified_by" });

  SectionPatient.hasMany(ADL, { foreignKey: "section_patient_id" });
  ADL.belongsTo(SectionPatient, { foreignKey: "section_patient_id" });

  // 1:N relationship between User and ADL for created_by
  User.hasMany(ADL, { foreignKey: "created_by" });
  ADL.belongsTo(User, { foreignKey: "created_by" });
  
  // 1:N relationship between User and ADL for modified_by
  User.hasMany(ADL, { foreignKey: "modified_by" });
  ADL.belongsTo(User, { foreignKey: "modified_by" });

  SectionPatient.hasMany(Note, { foreignKey: "section_patient_id" });
  Note.belongsTo(SectionPatient, { foreignKey: "section_patient_id" });

  // 1:N relationship between User and Note for created_by
  User.hasMany(Note, { foreignKey: "created_by" });
  Note.belongsTo(User, { foreignKey: "created_by" });

  // 1:N relationship between User and Note for modified_by
  User.hasMany(Note, { foreignKey: "modified_by" });
  Note.belongsTo(User, { foreignKey: "modified_by" });

  SectionPatient.hasMany(PatientPainScale, { foreignKey: "section_patient_id" });
  PatientPainScale.belongsTo(SectionPatient, { foreignKey: "section_patient_id" });

  PatientPainScale.hasMany(PainScale, { foreignKey: "pain_scale_id" });
  PainScale.belongsTo(PatientPainScale, { foreignKey: "pain_scale_id" });

  // 1:N relationship between User and PatientPainScale for created_by
  User.hasMany(PatientPainScale, { foreignKey: "created_by" });
  PatientPainScale.belongsTo(User, { foreignKey: "created_by" });

  // 1:N relationship between User and PatientPainScale for modified_by
  User.hasMany(PatientPainScale, { foreignKey: "modified_by" });
  PatientPainScale.belongsTo(User, { foreignKey: "modified_by" });

  SectionPatient.hasMany(VitalSigns, { foreignKey: "section_patient_id" });
  VitalSigns.belongsTo(SectionPatient, { foreignKey: "section_patient_id" });

  // 1:N relationship between User and VitalSigns for created_by
  User.hasMany(VitalSigns, { foreignKey: "created_by" });
  VitalSigns.belongsTo(User, { foreignKey: "created_by" });

  // 1:N relationship between User and VitalSigns for modified_by
  User.hasMany(VitalSigns, { foreignKey: "modified_by" });
  VitalSigns.belongsTo(User, { foreignKey: "modified_by" });

  SectionPatient.hasMany(IV_and_Lines, { foreignKey: "section_patient_id" });
  IV_and_Lines.belongsTo(SectionPatient, { foreignKey: "section_patient_id" });

  User.hasMany(IV_and_Lines, { foreignKey: "created_by" });
  IV_and_Lines.belongsTo(User, { foreignKey: "created_by" });

  User.hasMany(IV_and_Lines, { foreignKey: "modified_by" });
  IV_and_Lines.belongsTo(User, { foreignKey: "modified_by" });

  SectionPatient.hasMany(MusculoskeletalInfo, { foreignKey: "section_patient_id" });
  MusculoskeletalInfo.belongsTo(SectionPatient, { foreignKey: "section_patient_id" });

  User.hasMany(MusculoskeletalInfo, { foreignKey: "created_by" });
  MusculoskeletalInfo.belongsTo(User, { foreignKey: "created_by" });

  User.hasMany(MusculoskeletalInfo, { foreignKey: "modified_by" });
  MusculoskeletalInfo.belongsTo(User, { foreignKey: "modified_by" });

  SectionPatient.hasMany(GastrointestinalInfo, { foreignKey: "section_patient_id" });
  GastrointestinalInfo.belongsTo(SectionPatient, { foreignKey: "section_patient_id" });

  User.hasMany(GastrointestinalInfo, { foreignKey: "created_by" });
  GastrointestinalInfo.belongsTo(User, { foreignKey: "created_by" });

  User.hasMany(GastrointestinalInfo, { foreignKey: "modified_by" });
  GastrointestinalInfo.belongsTo(User, { foreignKey: "modified_by" });


  SectionPatient.hasMany(RespiratoryInfo, { foreignKey: "section_patient_id" });
  RespiratoryInfo.belongsTo(SectionPatient, { foreignKey: "section_patient_id" });

  User.hasMany(RespiratoryInfo, { foreignKey: "created_by" });
  RespiratoryInfo.belongsTo(User, { foreignKey: "created_by" });

  User.hasMany(RespiratoryInfo, { foreignKey: "modified_by" });
  RespiratoryInfo.belongsTo(User, { foreignKey: "modified_by" });


  SectionPatient.hasMany(NeurologicalInfo, { foreignKey: "section_patient_id" });
  NeurologicalInfo.belongsTo(SectionPatient, { foreignKey: "section_patient_id" });

  User.hasMany(NeurologicalInfo, { foreignKey: "created_by" });
  NeurologicalInfo.belongsTo(User, { foreignKey: "created_by" });

  User.hasMany(NeurologicalInfo, { foreignKey: "modified_by" });
  NeurologicalInfo.belongsTo(User, { foreignKey: "modified_by" });
}

module.exports = { setupAssociations };
