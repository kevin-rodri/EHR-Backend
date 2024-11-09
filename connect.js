/* 
Name: Kevin Rodriguez
Date: 11/4/2024 
Description: This file will connect to the database using Sequelize.
Source: https://sequelize.org/master/manual/getting-started.html
*/
require("dotenv").config();
const { Sequelize } = require("sequelize");

// Initialize Sequelize with environment variables
function connectToDatabase() {
  const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: process.env.DB_DIALECT,
      port: process.env.DB_PORT,
    }
  );

  sequelize
    .authenticate()
    .then(() => {
      console.log(
        "Connection to the database has been established successfully."
      );
    })
    .catch((err) => {
      console.error("Unable to connect to the database:", err);
    });
}

// Close the database connection - used for testing
function closeDatabaseConnection() { 
  sequelize.close();
}

module.exports = {
  connectToDatabase,
  closeDatabaseConnection
};