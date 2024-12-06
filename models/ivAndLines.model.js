/* 
Name: Dylan Bellinger
Date: 12/5/2024 
Description: IV and Lines data model.
*/
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "IV_and_Lines",
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

            iv_type: {
                type: DataTypes.CHAR(50),
                allowNull: false,
            },

            size: {
                type: DataTypes.CHAR(250),
                allowNull: false,
            },

            scale_name: {
                type: DataTypes.CHAR(50),
                allowNull: false,
            },

            fluid_or_med_name: {
                type: DataTypes.CHAR(100),
                allowNull: false,
            },

            fluid_or_med_rate: {
                type: DataTypes.CHAR(100),
                allowNull: false,
            },

            patent: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },

            is_clinical_documentation_improvement: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },

            created_by: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            created_date: {
                type: "TIMESTAMP",
                defaultValue: DataTypes.NOW,
                allowNull: false,
            },

            modified_by: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            modified_date: {
                type: "TIMESTAMP",
                defaultValue: DataTypes.NOW,
                allowNull: false,
            },

        },

        {
            tableName: "iv_and_lines",
            timestamps: false,
        }
    );
};