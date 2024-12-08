/*
Name: Gabby Pierce and Dylan Bellinger
Date: 12/7/2024
Description: A model representing the ADL (Activities of Daily Living) table in the database.
*/

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "ADL",
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

            has_oral_care: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },

            has_bathed: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },

            reposition: {
                type: DataTypes.CHAR(255),
                allowNull: true,
            },

            elimination_needed: {
                type: DataTypes.CHAR(255),
                allowNull: true,
            },

            is_meal_given: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },

            amount_meal_consumed: {
                type: DataTypes.DECIMAL(5, 2),
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
      tableName: "adl", 
      timestamps: false, 
    }
  );
};
