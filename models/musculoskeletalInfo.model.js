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

      section_patient_id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        references: {
          model: "SectionPatient",
          key: "id",
        },
      },
      adl_id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        references: {
          model: "ADL",
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

      abnormalities: {
        type: DataTypes.CHAR(1000),
        allowNull: true,
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
        defaultValue: DataTypes.NOW,
        allowNull: false,
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
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
    },
    {
      tableName: "musculoskeletal_info",
      timestamps: false,
    }
  );
};
