const mongoose = require("mongoose");
require('dotenv').config()

const matchSchema = new mongoose.Schema({
  teamA: {
    type: String,
    required: true,
    trim: true,
  },
  teamB: {
    type: String,
    required: true,
    trim: true,
  },
  venue: {
    type: String,
    required: true,
    trim: true,
  },
  matchNumber: {
      type: String,
      required: false,
      trim: true
  }
});

matchSchema.methods.toJSON = function () {
  const match = this;
  const matchObject = match.toObject();
  return matchObject;
};

const Match = mongoose.model("match", matchSchema);


module.exports = Match;
