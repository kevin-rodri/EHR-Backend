/* 
Name: Kevin Rodriguez
Date: 11/4/2024 
Description: Section routes file that establishes all the endpoints needed.
*/
const express = require("express");
const router = express.Router();
const {
  getAllSections,
  getSectionById,
  updateSection,
  createSection,
  deleteSection,
} = require("../controller/section.controller");
const { isUserAdminFromToken } = require("../middleware/middleware");

router
  .route("/")
  .get([isUserAdminFromToken], getAllSections)
  .post([isUserAdminFromToken], createSection);

router
  .route("/:id")
  .get([isUserAdminFromToken], getSectionById)
  .put([isUserAdminFromToken], updateSection)
  .delete([isUserAdminFromToken], deleteSection);

module.exports = router;
