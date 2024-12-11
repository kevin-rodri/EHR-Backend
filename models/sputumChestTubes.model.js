/*
Name: Kevin Rodriguez
Date: 11/9/2024
Description: The Sputum Chest Tubes model representing the Sputum Chest Tubes table in the database.  This 
model is associated with the Respiratory Info model, etc.
*/

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "SputumChestTubes",
    {
      id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      respiratory_id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        references: {
          model: "RespiratoryInfo",
          key: "id",
        },
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
      }
    },
    {
      tableName: "sputum_chest_tubes",
      timestamps: false,
    }
  );
};
