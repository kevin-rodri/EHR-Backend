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

            section_patient_id: {
                type: DataTypes.CHAR(36),
                allowNull: false,
                references: {
                    model: "SectionPatient",
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
            has_foley_care: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
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
                type: DataTypes.CHAR(36),
                allowNull: false,
                references: {
                    model: "User",
                    key: "id",
                },
            },
            created_date: {
                type: "TIMESTAMP",
                allowNull: false,
                defaultValue: DataTypes.NOW, 
            },
            modified_by: {
                type: DataTypes.CHAR(36),
                allowNull: false,
                references: {
                    model: "User",
                    key: "id",
                },
            },
            modified_date: {
                type: "TIMESTAMP",
                allowNull: false,
                defaultValue: DataTypes.NOW, 
            },
        },
    {
      tableName: "adl", 
      timestamps: false, 
    }
  );
};
