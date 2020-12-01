const express = require("express");
const auth = require("../middleware/auth");
const players = require("../allplayers");

var cors = require('cors');
const Team = require("../models/Teams");

var app = express();
app.use(cors())

const router = new express.Router();


var corsOptions = {
  origin: '*',
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "*",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


// try {
  
//  const eachTeam = players.teams;

//  eachTeam.forEach(async function(t) {
//   const player = new Team(t)
//   await player.save()
// }); 
// } catch {

// }

router.post("/teams", cors(corsOptions), async (req,res) => {
    try {
        const { teamName } = req.body;
        const team = await Team.find({name: teamName});
        return res.status(200).send(team)
    } catch (error) {
        console.log(error);
        res.status(400).send({error: "failed to fetch the data "});
    }
})

module.exports = router;
