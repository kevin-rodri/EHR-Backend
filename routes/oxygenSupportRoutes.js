/*
Name: Kevin Rodriguez
Date: 12/11/2024
Description: This file contains the routes for the oxygen support endpoints.
*/

const express = require("express");
const router = express.Router();
const {
    getOxygenSupport,
    addOxygenSupport,
    updateOxygenSupport,
    deleteOxygenSupport,
} = require("../controller/oxygenSupport.controller");

router
.route("/respiratory/:respiratory_id")
.get(getOxygenSupport)
.post(addOxygenSupport);

router
.route("/respiratory/:respiratory_id/support/:id")
.put(updateOxygenSupport);

router.route("/:id").delete(deleteOxygenSupport);

module.exports = router;