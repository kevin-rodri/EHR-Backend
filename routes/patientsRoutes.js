/* 
Name: Dylan Bellinger
Date: 11/11/2024 
Description: Patient routes for endpoints.
*/
var express = require('express');
var router = express.Router();
const patientController = require('../controller/patient.controller');

router.get('/', patientController.getAllPatients);
router.get('/:patient_id', patientController.getPatientBannerInfo);
router.get('/:patient_id', patientController.getPatientByID);
router.post('/', patientController.createPatient);
router.put('/:patient_id', patientController.updatePatient);
router.delete('/:patient_id', patientController.deletePatient);

module.exports = router;