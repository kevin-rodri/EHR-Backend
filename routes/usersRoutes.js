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

router.route("/").get(getAllUsers).post(createUser);
router.route("/signIn").post(signInUser);
router.route("/:id").put(updateUser).delete(deleteUser);

module.exports = router;
