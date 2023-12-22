const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const SALT_ROUNDS = 6;

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    userLevel: {
      type: Number,
      required: true,
      default: 1,
    },
    team: {
      type: Schema.Types.ObjectId,
      ref: "Team",
    },
    stats: [{ type: Schema.Types.ObjectId, ref: "PlayerStats" }], // Referencing PlayerStats
    photoUrl: {
      type: String,
      required: false,
    },
    lastLogin: Date,
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.password;
        return ret;
      },
    },
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
});

module.exports = mongoose.model("User", userSchema);
