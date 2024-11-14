/* 
Name: Dylan Bellinger
Date: 11/9/2024 
Description: User routes for endpoints.
*/
var express = require("express");
var router = express.Router();
const {
  getAllUsers,
  signInUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controller/user.controller");
const { generateToken } = require("../middleware/middleware");

router.route("/").get(getAllUsers).post(createUser);
router.route("/signIn").post([generateToken], signInUser);
router.route("/:user_id").put(updateUser).delete(deleteUser);

module.exports = router;
