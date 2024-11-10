/* 
Name: Kevin Rodriguez
Date: 11/4/2024 
Description: This file will connect to the database using Sequelize.
Source: https://sequelize.org/master/manual/getting-started.html
*/
require("dotenv").config();
const { Sequelize } = require("sequelize");

let sequelize;

// Initialize Sequelize with environment variables
function connectToDatabase() {
  sequelize = new Sequelize(
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

  return sequelize; // Return the instance for potential use
}

// Close the database connection - used for testing purposes
function closeDatabaseConnection() {
  if (sequelize) {
    sequelize
      .close()
      .then(() => console.log("Database connection closed successfully."))
      .catch((err) =>
        console.error("Error closing the database connection:", err)
      );
  } else {
    console.error("No sequelize instance available to close.");
  }
}

module.exports = {
  connectToDatabase,
  closeDatabaseConnection,
};
