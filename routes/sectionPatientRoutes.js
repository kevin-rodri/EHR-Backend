/* Name: Kevin Rodriguez
Date: 1/20/25
Description: Section Patient routes file that establishes all the endpoints needed.
*/

const express = require("express");
const router = express.Router();
const {
  getSectionPatient,
  addPatientToSection,
  updateSectionPatient,
  deleteSectionPatient,
} = require("../controller/sectionPatient.controller");
const { validateToken, isUserAdminFromToken, validateFacultyToken  } = require("../middleware/middleware");

router.route("/:section_id/patient").get([validateToken], getSectionPatient).post([isUserAdminFromToken], addPatientToSection);

router.route("/section-patient/:id").put([validateFacultyToken], updateSectionPatient).delete([isUserAdminFromToken], deleteSectionPatient);

module.exports = router;