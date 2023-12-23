const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  name: { type: String },
  players: [{ type: Schema.Types.ObjectId, ref: "Player" }],
  stats: [{ type: Schema.Types.ObjectId, ref: "TeamStats " }],
  venue: { type: Schema.Types.ObjectId, ref: "Venue" },
});

module.exports = mongoose.model("Team", teamSchema);
