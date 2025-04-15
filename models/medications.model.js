/*
Name: Kevin Rodriguez
Date: 1/25/2025
Remarks: model is used to represent the Medications table in the database.
(just holds medication names)
*/
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Medications",
    {
      id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      drug_name: {
        type: DataTypes.CHAR(100),
        allowNull: false,
      },
      generic_name: {
        type: DataTypes.CHAR(100),
        allowNull: false,
      },
      dose_amount: {
        type: DataTypes.CHAR(50),
        allowNull: false,
      },
      allergens: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      barcode_value: {
        type: DataTypes.CHAR(500), 
        allowNull: false
      }
    },
    {
      tableName: "medications",
      timestamps: false,
    }
  );
};
