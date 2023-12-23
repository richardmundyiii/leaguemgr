const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const venueSchema = new Schema({
  name: String,
  street: String,
  city: String,
  isSmoking: Boolean,
  imgUrl: String,
});

module.exports = mongoose.model("Venue", venueSchema);
