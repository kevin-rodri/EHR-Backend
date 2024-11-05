/* 
Name: Kevin Rodriguez
Date: 11/4/2024 
Description: A Patient model representing the Patient table in the database.
*/
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:"); // may have to adjust

const Patient = sequelize.define("Patient", {
  // liquibase changeset has ids as CHAR(36) and uses the UUID() function to generate them
  patient_id: {
    type: DataTypes.CHAR(36),
    allowNull: false,
    primaryKey: true,
  },
  section_id: {
    type: DataTypes.CHAR(36),
    allowNull: true, 
    references: {
      model: "Section",
      key: "section_id",
    },
  },
  date_of_birth: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  religion: {
    type: DataTypes.CHAR(50),
    allowNull: false,
  },
  full_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  weight: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false,
  },
  height: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false,
  },
  has_insurance: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  has_advanced_directives: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  allergies: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  emergency_contact_full_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  emergency_contact_phone_number: {
    type: DataTypes.CHAR(20),
    allowNull: false,
  },
  code_status: {
    type: DataTypes.ENUM("FULL-CODE", "DOES-NOT-RESUSCITATE"),
    allowNull: false,
  },
  precautions: {
    type: DataTypes.ENUM(
      "PRECAUTIONS",
      "CONTACT",
      "DROPLET",
      "TUBERCULOSIS",
      "AIRBORNE"
    ),
    allowNull: false,
  },
});

module.exports = Patient;