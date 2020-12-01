const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('dotenv').config()

const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    owner: {
        type: String,
        required: true,
        trim: true,
    },
    coach: {
        type: String,
        required: true,
        trim: true,
    },
    venue: {
        type: String,
        required: false,
        trim: true
    },
    winners: {
        type: String,
        required: false,
        trim: true
    },
    captain: {
        type: String,
        required: false,
        trim: true
    },
    teamId: {
        type: String,
        required: false,
        trim: true 
    }
});

teamSchema.methods.toJSON = function () {
  const team = this;
  const teamObject = team.toObject();
  return teamObject;
};

const Team = mongoose.model("teams", teamSchema);
module.exports = Team;
