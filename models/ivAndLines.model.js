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

      section_patient_id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        references: {
          model: "SectionPatient",
          key: "id",
        },
      },

      iv_type: {
        type: DataTypes.CHAR(50),
        allowNull: false,
      },

      size: {
        type: DataTypes.CHAR(50),
        allowNull: false,
      },

      location: {
        type: DataTypes.CHAR(250),
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
      tableName: "iv_and_lines",
      timestamps: false,
    }
  );
};
