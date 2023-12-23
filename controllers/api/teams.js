const Team = require("../../models/team");

module.exports = {
  index,
  createTeam,
};

async function index(req, res) {
  try {
    const teams = await Team.find({});
    res.json(teams);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function createTeam(req, res) {
  try {
    const newTeam = Team.create(req.body);
    res.json(newTeam);
  } catch (err) {
    res.status(400).json(err);
  }
}
