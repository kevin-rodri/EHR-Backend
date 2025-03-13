/*
Name: Kevin Rodriguez
Date: 11/9/2024
Description: Respiratory Info model representing the Respiratory Info table in the database.  This 
model will associate with other Respiratory Info related information. 
*/

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "RespiratoryInfo",
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
      breathing_pattern: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      breathing_effort: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      anterior_right_upper_lobe: {
        type: DataTypes.CHAR(100),
        allowNull: false,
      },
      posterior_right_upper_lobe: {
        type: DataTypes.CHAR(100),
        allowNull: false,
      },
      anterior_lower_upper_lobe: {
        type: DataTypes.CHAR(100),
        allowNull: false,
      },
      posterior_lower_upper_lobe: {
        type: DataTypes.CHAR(100),
        allowNull: false,
      },
      anterior_right_middle_lobe: {
        type: DataTypes.CHAR(100),
        allowNull: false,
      },
      posterior_right_middle_lobe: {
        type: DataTypes.CHAR(100),
        allowNull: false,
      },
      anterior_right_lower_lobe: {
        type: DataTypes.CHAR(100),
        allowNull: false,
      },
      posterior_right_lower_lobe: {
        type: DataTypes.CHAR(100),
        allowNull: false,
      },
      anterior_left_lower_lobe: {
        type: DataTypes.CHAR(100),
        allowNull: false,
      },
      posterior_left_lower_lobe: {
        type: DataTypes.CHAR(100),
        allowNull: false,
      },
      has_continuous_oxygen_pulse: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      has_oxygen_support: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      oxygen_support_device: {
        type: DataTypes.CHAR(100),
        allowNull: false,
      },
      oxygen_flow_rate: {
        type: DataTypes.CHAR(100),
        allowNull: false,
      },
      sputum_amount: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false,
      },
      sputum_color: {
        type: DataTypes.CHAR(50),
        allowNull: false,
      },
      has_incentive_spirometer_use: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      chest_tube_location: {
        type: DataTypes.CHAR(50),
        allowNull: true,
      },
      chest_tube_suction: {
        type: DataTypes.CHAR(50),
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
      tableName: "respiratory_info",
      timestamps: false,
    }
  );
};
