/* 
Name: Kevin Rodriguez
Date: 11/4/2024 
Description: Middleware functions that generate and validate tokens.
*/
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// generates a token when a user signs in
const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, role: user.role },
    process.env.SECRET_KEY,
    { expiresIn: "2h" }
  );
};

// https://apidog.com/blog/bearer-token-nodejs-express/ with some modifications
const validateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer token

  if (token == null) {
    return res.status(401).send("No token present");
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).send("Some invalid token message here.");
    }
    req.user = user;
    next();
  });
};

// validates if bearer token passed in is valid and from an admin user
const isUserAdminFromToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    // think of better message
    return res.status(403).send("No token present");
  }

  jwt.verify(token, process.env.SECRET_KEY, (user) => {
    if (user.role != "ADMIN") {
      return res.status(401).send("Unauthorized to access this resource");
    }
    req.user = user;
    next();
  });
};

// validates if bearer token passed in is valid and from a faculty user
const validateFacultyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    return res.status(403).send("No token present");
  }

  jwt.verify(token, process.env.SECRET_KEY, (user) => {
    if (user.role != "ADMIN" || user.role != "INSTRUCTOR") {
      return res.status(401).send("Unauthorized to access this resource");
    }
    req.user = user;
    next();
  });
};

// 10 is recommended by bcrypt based on the documentation
const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

// compares the password passed in with the hashed password in the db
const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

module.exports = {
  generateToken,
  validateToken,
  isUserAdminFromToken,
  validateFacultyToken,
  hashPassword,
  comparePassword,
};
