const mongoose = require("mongoose");

var Schema = mongoose.Schema;

require('dotenv').config()

const suggestedTeamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  team: {
    type: String,
    required: true,
    trim: true,
  },
  url: {
    type: String,
    required: true,
    trim: true,
  },
  isViceCaptain: {
      type: Boolean,
      required: false,
      trim: true
  },
  isCaptain: {
    type: Boolean,
    required: false,
    trim: true
  },
  matchNumber: {
    type: String,
    required: false,
    trim: true
  },
  userId: {
    type: Schema.Types.ObjectId, ref: "User",
    required: false,
    trim: true
  }
});

suggestedTeamSchema.methods.toJSON = function () {
  const player = this;
  const playerObject = player.toObject();
  return playerObject;
};

const SuggestedTeam = mongoose.model("suggestedTeam", suggestedTeamSchema);

suggestedTeamSchema.statics.findByTeam = async (teamName) => {
  const suggestedTeam = await SuggestedTeam.findOne({ teamName });
  return suggestedTeam;
};



module.exports = SuggestedTeam;
