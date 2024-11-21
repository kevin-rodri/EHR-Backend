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

router.route("/").get(getAllSections).post(createSection);

router
  .route("/:id")
  .get(getSectionById)
  .put(updateSection)
  .delete(deleteSection);

module.exports = router;
