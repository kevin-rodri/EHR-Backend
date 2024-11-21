/* 
Name: Kevin Rodriguez
Date: 11/4/2024 
Description: A Section model representing the Section table in the database.
*/
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    "Section",
    {
      // liquibase changeset has ids as CHAR(36) and uses the UUID() function to generate them
       // note: DataTypes.UUIDV4 should be the equivalent to the UUID() function in MYSQL
      id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      section_name: {
        type: DataTypes.CHAR(25),
        allowNull: false,
      },
      user_id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        references: {
          model: "User",
          key: "id",
        },
      },
      patient_id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        references: {
          model: "Patient",
          key: "id",
        },
      },
    },
    {
      tableName: "section",
      timestamps: false,
    }
  );
};
