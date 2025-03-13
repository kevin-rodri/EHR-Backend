/*
Name: Kevin Rodriguez 
Date: 12/05/24 
Description: Neurological Info model representing the Neurological Info table in the database.  This 
model will associate with other Neurological Info related information. 
*/

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "NeurologicalInfo",
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
      left_pupil_reaction: {
        type: DataTypes.CHAR(50),
        allowNull: false,
      },
      left_pupil_size: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      right_pupil_reaction: {
        type: DataTypes.CHAR(50),
        allowNull: false,
      },
      right_pupil_size: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      is_person_conscious: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      is_person_conscious_of_place: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      is_person_conscious_of_time: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      alertness_description: {
        type: DataTypes.CHAR(1000),
        allowNull: true,
      },
      strength_left_upper_extremity_grip: {
        type: DataTypes.CHAR(50),
        allowNull: false,
      },
      strength_left_upper_extremity_sensation: {
        type: DataTypes.CHAR(50),
        allowNull: false,
      },
      strength_right_upper_extremity_grip: {
        type: DataTypes.CHAR(50),
        allowNull: false,
      },
      left_lower_extremity_strength: {
        type: DataTypes.CHAR(50),
        allowNull: false,
      },
      left_lower_extremity_sensation: {
        type: DataTypes.CHAR(50),
        allowNull: false,
      },
      right_lower_extremity_strength: {
        type: DataTypes.CHAR(50),
        allowNull: false,
      },
      right_lower_extremity_sensation: {
        type: DataTypes.CHAR(50),
        allowNull: false,
      },
      neurological_note: {
        type: DataTypes.STRING,
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
      tableName: "neurological_info",
      timestamps: false,
    }
  );
};
