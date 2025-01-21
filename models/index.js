// Name: Kevin Rodriguez
// Date: 11/20/2024
// Initializes the models to be used in the application
// Logic borrowed from: https://github.com/sequelize/express-example/blob/master/express-main-example/sequelize/index.js

const { Sequelize } = require("sequelize");
const { setupAssociations } = require("../associations");
require("dotenv").config();
const mysql2 = require('mysql2');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    dialectModule: mysql2
  }
);

// TO-DO: Add the models to be used in the backend (keep adding until all models are added!)
const models = [
  require("./user.model"),
  require("./section.model"),
  require("./sectionRoster.model"),
  require("./sectionPatient.model"),
  require("./patient.model"),
  require("./patientOrder.model"),
  require("./intake.model"),
  require("./patientPainScale.model"),
  require("./vitalSigns.model"),
  require("./assessments.model"),
  require("./genitourinaryInfo.model"),
  require("./urinaryDetails.model"),
  require("./dialysisInfo.model"),
  require("./output.model"),
  require("./ivAndLines.model"),
  require("./neurologicalInfo.model"),
  require("./pupilInfo.model"),
  require("./consciousnessInfo.model"),
  require("./strengthInfo.model"),
  require("./adl.model"),
  require("./gastrointestinalInfo.model"),
  require("./note.model"),
  require("./patientHistory.model"),
  require("./adl.model"),
  require("./musculoskeletalInfo.model"),
  require("./patientMedications.model"),
  require("./waldoDiagrams.model"), 
  require("./labValues.model"),
  require("./respiratoryInfo.model"),
  require("./lungs.model"),
  require("./oxygenSupport.model"),
  require("./sputumChestTubes.model"),
  // you get the idea :)
];

// define models
for (const modelDefiner of models) {
  modelDefiner(sequelize);
}

// setup associations
setupAssociations(sequelize);

module.exports = sequelize;
