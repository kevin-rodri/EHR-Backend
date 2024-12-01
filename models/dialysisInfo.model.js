/* 
Name: Kevin Rodriguez
Date: 11/30/2024
Description: The Dialysis model representing the Urinary Details table in the database.  This 
model is associated with the Genitourinary Info model, etc.
*/

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "DialysisInfo",
    {
      id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      genitourinary_id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        references: {
          model: "GenitourinaryInfo",
          key: "id",
        },
      },
      has_dialysis: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      date_of_last_treatment: {
        type: "TIMESTAMP",
        allowNull: false,
      },
      dialysis_access_type: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      has_dialysis_access_dressing_cdi: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      foley_catheter: {
        type: DataTypes.CHAR(100),
        allowNull: false,
      },
      urinary_diversion_notes: {
        type: DataTypes.CHAR(1000),
        allowNull: false,
      },
      foley_removed: {
        type: "TIMESTAMP",
        allowNull: false,
      },
    },
    {
      tableName: "dialysis_info",
      timestamps: false,
    }
  );
};
