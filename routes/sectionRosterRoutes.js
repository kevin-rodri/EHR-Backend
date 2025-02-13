/*
Name: Kevin Rodriguez
Date: 1/20/25
Description: Section Roster routes file that establishes all the endpoints needed.
*/

const express = require("express");
const router = express.Router();
const {
  getSectionRoster,
  createSectionRoster,
  updateSectionRoster,
  deleteSectionRoster,
  getSectionRosterByUserId
} = require("../controller/sectionRoster.controller");
const { validateToken } = require("../middleware/middleware");

router.route("/:section_id/section-roster").get([validateToken], getSectionRoster).post(createSectionRoster);
router.route("/section-roster/:user_id").get(getSectionRosterByUserId)
router.route("/section-roster/:id").put([validateToken], updateSectionRoster).delete([validateToken], deleteSectionRoster);


module.exports = router;