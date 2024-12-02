/* 
Name: Dylan Bellinger
Date: 12/2/2024 
Description: Output data model.
*/
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "Output",
        {
            id: {
                type: DataTypes.CHAR(36),
                allowNull: false,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
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
                type: DataTypes.ENUM("URINE VOIDED", "FOLEY"),
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
            tableName: "output",
            timestamps: false,
        }
    );
};