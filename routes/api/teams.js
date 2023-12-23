const express = require("express");
const router = express.Router();
const teamCtrl = require("../../controllers/api/teams");

router.get("/", teamCtrl.index);

router.post("/", teamCtrl.createTeam);

module.exports = router;
