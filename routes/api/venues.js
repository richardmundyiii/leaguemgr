const express = require("express");
const router = express.Router();
const venueCtrl = require("../../controllers/api/venues");

router.get("/", venueCtrl.index);

router.get("/:id", venueCtrl.getVenueDetails);

router.post("/", venueCtrl.createVenue);

module.exports = router;
