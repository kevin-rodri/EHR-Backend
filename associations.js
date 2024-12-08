/* 
Name: Kevin Rodriguez
Date: 11/4/2024 
Description: File is used to establish associations between models.
Note: This will set up will appearently add the foreign keys references to the models.
Per: https://github.com/sequelize/express-example/blob/master/express-main-example/sequelize/models/instrument.model.js
*/

function setupAssociations(sequelize) {
  const { User, Section, Patient, PatientOrders, ADL, PatientHistory, Note} = sequelize.models;

    // 1:N relationship between User and Section
    User.hasMany(Section, { foreignKey: "user_id" });
    Section.belongsTo(User, { foreignKey: "user_id" });
  
    // 1:N relationship between Patient and Section
    Patient.hasMany(Section, { foreignKey: "patient_id" });
    Section.belongsTo(Patient, { foreignKey: "patient_id" });
  
    // 1:N relationship between Patient and PatientOrder
    Patient.hasMany(PatientOrders, { foreignKey: "patient_id" });
    PatientOrders.belongsTo(Patient, { foreignKey: "patient_id" });

    Patient.hasMany(ADL, { foreignKey: "patient_id"});
    ADL.belongsTo(Patient, { foreignKey: "patient_id" });

    Patient.hasMany(PatientHistory, { foreignKey: "patient_id"});
    PatientHistory.belongsTo(Patient, { foreignKey: "patient_id" });
    
    Patient.hasMany(Note, { foreignKey: "patient_id"});
    Note.belongsTo(Patient, { foreignKey: "patient_id" });
}

module.exports = { setupAssociations };
