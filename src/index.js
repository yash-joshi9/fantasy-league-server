const path = require("path");
const express = require("express");
const app = express();

require("./db/mongoose");
const userRouter = require("./routers/user");
const playerRouter = require("./routers/player");
const teamRouter = require("./routers/teams");
const matchRouter = require("./routers/match");
const SuggestedTeamRouter = require("./routers/suggestedTeam")


const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());


app.use(userRouter);
app.use(playerRouter)
app.use(teamRouter)
app.use(matchRouter)
app.use(SuggestedTeamRouter)


console.log(">>>>>>")
app.listen(port, () => {
  console.log("Server is up on port " + port);
});

module.exports.app = app;