/* 
Name: Dylan Bellinger
Date: 11/18/2024 
Description: Intake data model.
*/
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Intake",
    {
      id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      patient_id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        references: {
          model: "Patient",
          key: "id",
        },
      },

      type: {
        type: DataTypes.ENUM("PO", "TUBE FEEDING", "IV"),
        allowNull: false,
      },

      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      date_and_time_taken: {
        type: "TIMESTAMP",
        allowNull: false,
      },
    },
    {
      tableName: "intake",
      timestamps: false,
    }
  );
};
