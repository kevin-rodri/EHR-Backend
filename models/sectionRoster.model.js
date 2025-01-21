/*
Name: Kevin Rodriguez
Date: 1/20/25 
Remark: A Section Roster model representing the Section Roster table in the database.
*/

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "SectionRoster",
    {
      // liquibase changeset has ids as CHAR(36) and uses the UUID() function to generate them
      // note: DataTypes.UUIDV4 should be the equivalent to the UUID() function in MYSQL
      id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      section_id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        references: {
          model: "Section",
          key: "id",
        },
      },
      user_id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        references: {
          model: "User",
          key: "id",
        },
      },
    },
    {
      tableName: "section_roster",
      timestamps: false,
    }
  );
};
