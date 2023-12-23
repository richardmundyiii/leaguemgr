const Venue = require("../../models/venue");
const Team = require("../../models/team");

module.exports = {
  index,
  createVenue,
  getVenueDetails,
};

async function index(req, res) {
  try {
    const venues = await Venue.find({});
    res.json(venues);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function createVenue(req, res) {
  try {
    const newVenue = await Venue.create(req.body);
    res.json(newVenue);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function getVenueDetails(req, res) {
  try {
    const venue = await Venue.findById({ id: req.params.id });
    res.json(venue);
  } catch (err) {
    res.status(400).json(err);
  }
}

// async function getTeamsByVenue(req, res) {
//   try {
//     const teams = await Team.find({ venue: req.params.id });
//     console.log("working");
//     res.json(teams);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// }
