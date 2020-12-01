const express = require("express");
const User = require("../models/User");

const auth = require("../middleware/auth");

var cors = require("cors");
const Team = require("../models/Teams");
const SuggestedTeam = require("../models/suggestedTeam");

const { teams } = require("../allplayers");
const getRandomPlayers = require("../calculate");

var app = express();
app.use(cors());

const router = new express.Router();

var corsOptions = {
  origin: "*",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
router.post("/players/suggest", cors(corsOptions), async (req, res) => {
  try {
    const { teamA, teamB, _id } = req.body;

    const teamidA = await Team.find({ name: teamA }, { teamId: 1 });
    const teamidB = await Team.find({ name: teamB }, { teamId: 1 });

    const Team1 = teamidA[0].teamId;
    const Team2 = teamidB[0].teamId;

    const team = getRandomPlayers(Team1, Team2);
    

    // team.forEach(async function (t) {
    //   const st = new SuggestedTeam({...t, matchNumber: "Match 45", userId: _id});
    //   await st.save();
    // });

    return res.status(200).send(team);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: "failed to fetch the data " });
  }
});

module.exports = router;
