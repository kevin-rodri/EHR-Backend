/*
Name: Gabby Pierce
Date: 12/1/2024
Description: The API for table notes
*/
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'Note',
    {
    // liquibase changeset has ids as CHAR(36) and uses the UUID() function to generate them
      // note: DataTypes.UUIDV4 should be the equivalent to the UUID() function in MYSQL
      id: {
        type: DataTypes.CHAR(36),
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
      },
      patient_id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        references: {
          model: "patient",
          key: "id",
        },
      },
      title: {
        type: DataTypes.CHAR(100),
        allowNull: false,
      },
      description: {
        type: DataTypes.CHAR(1256),
        allowNull: false,
      },
      created_by: {
        type: DataTypes.CHAR(225),
        allowNull: false,
      },
      created_date: {
        type: "TIMESTAMP",
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
      modified_by: {
        type: DataTypes.CHAR(255),
        allowNull: false,
      },
      modified_date: {
        type: "TIMESTAMP",
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
    },
    {
      tableName: "note",
      timestamps: false,
    }
  );
};
