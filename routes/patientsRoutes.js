/* 
Name: Dylan Bellinger
Date: 11/11/2024 
Description: Patient routes for endpoints.
*/
var express = require('express');
var router = express.Router();
const patientController = require('../controller/patient.controller');

router.get('/patients', patientController.getAllPatients);
router.get('/patients/:patient_id', patientController.getPatientByID);
router.post('/patients', patientController.createPatient);
router.put('/patients/:patient_id', patientController.updatePatient);
router.delete('/patients/:patient_id', patientController.deletePatient);

module.exports = router;