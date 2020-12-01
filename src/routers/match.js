const express = require("express");
const User = require("../models/User");

const auth = require("../middleware/auth");

var cors = require('cors');
const Match = require("../models/match");
const { teams } = require("../allplayers");

var app = express();
app.use(cors())

const router = new express.Router();


var corsOptions = {
  origin: '*',
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "*",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// const match = new Match({
//     teamA: "dc",
//     teamB: "rcb",
//     venue: "M. Chinnaswamy Stadium",
//     matchNumber: "Match 46"
// })

// match.save()


router.get("/matches", cors(corsOptions), async (req,res) => {
    try {
        // const { teamName } = req.body;
        const matches = await Match.find();
        console.log(matches)
        return res.status(200).send(matches)
    } catch (error) {
        console.log(error);
        res.status(400).send({error: "failed to fetch the data "});
    }
})

module.exports = router;
