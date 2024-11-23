/* 
Name: Dylan Bellinger
Date: 11/18/2024 
Description: Intake data model.
*/
const { DataTypes } = require("sequelize");

const Intake = (sequelize) => sequelize.define("Intake", {

    intake_id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        primaryKey: true,
      },

    patient_id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        references: {
          model: "Patient",
          key: "patient_id",
        },
    },

    type: {
        type: DataTypes.ENUM(
          "PO",
          "TUBE FEEDING",
          "IV"
        ),
        allowNull: false,
    },

    amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    date_and_time_taken: {
        type: DataTypes.DATE,
        allowNull: false,
    }
});

module.exports = Intake;