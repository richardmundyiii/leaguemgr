const Venue = require("../../models/venue");

module.exports = {
  index,
  createVenue,
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
    const newVenue = Venue.create(req.body);
    res.json(newVenue);
  } catch (err) {
    res.status(400).json(err);
  }
}
