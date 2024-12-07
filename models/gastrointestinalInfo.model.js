/* 
Name: Dylan Bellinger
Date: 12/7/2024 
Description: Gastrointestinal Info data model.
*/
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "GastrointestinalInfo",
        {
            id: {
                type: DataTypes.CHAR(36),
                allowNull: false,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
            },

            assessment_id: {
                type: DataTypes.CHAR(36),
                allowNull: false,
                references: {
                    model: "Assessments",
                    key: "id",
                },
            },

            right_upper_quadrant: {
                type: DataTypes.CHAR(100),
                allowNull: true,
            },

            right_lower_quadrant: {
                type: DataTypes.CHAR(100),
                allowNull: true,
            },

            lower_upper_quadrant: {
                type: DataTypes.CHAR(100),
                allowNull: true,
            },

            lower_lower_quadrant: {
                type: DataTypes.CHAR(100),
                allowNull: true,
            },

            stool: {
                type: DataTypes.CHAR(100),
                allowNull: true,
            },

            last_bowel_movement: {
                type: "TIMESTAMP",
                allowNull: false,
            },

            gastric_tubic_note: {
                type: DataTypes.CHAR(255),
                allowNull: true,
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
            }
        },
        {
            tableName: "gastrointestinal_info",
            timestamps: false,
        }
    );
};