/* 
Name: Dylan Bellinger
Date: 12/8/2024
Description: Musculoskeletal Info data model.
*/
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "MusculoskeletalInfo",
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

            left_upper_extremity: {
                type: DataTypes.CHAR(100),
                allowNull: false,
            },

            left_lower_extremity: {
                type: DataTypes.CHAR(100),
                allowNull: false,
            },

            right_upper_extremity: {
                type: DataTypes.CHAR(100),
                allowNull: false,
            },

            right_lower_extremity: {
                type: DataTypes.CHAR(100),
                allowNull: false,
            },

            gait: {
                type: DataTypes.CHAR(50),
                allowNull: false,
            },

            adl_id: {
                type: DataTypes.CHAR(36),
                allowNull: false,
                references: {
                    model: "ADL",
                    key: "id",
                },
            },

            abnormalities: {
                type: DataTypes.CHAR(1000),
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
            tableName: "musculoskeletal_info",
            timestamps: false,
        }
    );
};