/* 
Name: Kevin Rodriguez
Date: 11/27/2024 
Description: A Patient Pain Scale model representing the Patient Pain Scale table in the database.
*/

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "PatientPainScale",
    {
      // liquibase changeset has ids as CHAR(36) and uses the UUID() function to generate them
      // note: DataTypes.UUIDV4 should be the equivalent to the UUID() function in MYSQL
      id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      scale_name: {
        type: DataTypes.CHAR(50),
        allowNull: false,
      },
      scale_value: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "patient_pain_scale",
      timestamps: false,
    }
  );
};
