/*
Name:   Kevin Rodriguez
Date:   12/11/2024
Description: This file contains the routes for the lungs endpoints.
*/

const express = require("express");
const router = express.Router();
const {
    getLungsInfo,
    addLungsInfo,
    updateLungsInfo,
    deleteLungsInfo,
} = require("../controller/lungs.controller");

router
.route("/respiratory/:respiratory_id")
.get(getLungsInfo)
.post(addLungsInfo);

router
.route("/respiratory/:respiratory_id/lungs/:id")
.put(updateLungsInfo);

router.route("/:id").delete(deleteLungsInfo);

module.exports = router;
