const express = require("express");
const router = express.Router();
const venueCtrl = require("../../controllers/api/venues");

router.get("/", venueCtrl.index);

router.post("/", venueCtrl.createVenue);

module.exports = router;
