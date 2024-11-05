const User = require("../models/User");
const jwt = require("jsonwebtoken");
const config = require("../config");

// generates a token when a user signs in
const generateToken = (user) => {
  return jwt.sign(
    { username: user.username, role: user.role },
    config.secretKey,
    { expiresIn: "2h" }
  );
};

// https://apidog.com/blog/bearer-token-nodejs-express/ with some modifications
const validateToken = (req, res, next) => {
  const authHeader = req.headers["Authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer token

  if (token == null) {
    return res.status(403).send("No token present");
  }

  jwt.verify(token, config.secretKey, (err, user) => {
    if (err) {
      return res.status(401).send("Some invalid token message here.");
    }
    req.user = user;
    next();
  });
};

// validates if bearer token passed in is valid and from an admin user
const isUserAdminFromToken = (req, res, next) => {
  const authHeader = req.headers["Authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    // think of better message
    return res.status(403).send("No token present");
  }

  jwt.verify(token, config.secretKey, (err, user) => {
    if (user.role != "ADMIN") {
      return res.status(401).send("Unauthorized to access this resource");
    }
    req.user = user;
    next();
  });
};

module.exports = {
  generateToken,
  validateToken,
  isUserAdminFromToken,
};
