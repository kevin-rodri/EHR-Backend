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
const { validateToken, isUserAdminFromToken , validateFacultyToken} = require("../middleware/middleware");

router.route("/").get(getAllSections).post([isUserAdminFromToken], createSection);

router
  .route("/:id")
  .get([validateToken], getSectionById)
  .put([validateFacultyToken], updateSection)
  .delete([validateToken], deleteSection);

module.exports = router;
