const express = require("express");
const router = express.Router();   // requiring router object
const wrapAsync = require("../utils/wrapAsync");

const Service = require("../model/services");
const ServiceController = require("../controllers/services");

router
    .route("/")
    .get(wrapAsync(ServiceController.index));

router
    .route("/:id")
    .get(wrapAsync(ServiceController.showListing));

module.exports = router;