const { players } = require("./allplayers");
const Player = require("./models/Players");

const filterPlayers = (teamName) => {
  return players.filter((item) => {
    return item.team === teamName;
  });
};



const getRandomPlayers = (team1, team2) => {

  const TeamA = filterPlayers(team1);
  const TeamB = filterPlayers(team2);

  // const filteredTeamA = generateRandomPlayers(TeamA);
  // const filteredTeamB = generateRandomPlayers(TeamB);


  const bothTeam = [...TeamA, ...TeamB];




  let ans = generateRandomPlayers(bothTeam);


  ans.forEach((player, index) => {
    delete player.isCaptain;
    delete player.stats;

    if (index === 5) {
      player.isCaptain = true;
      player.isViceCaptain = false;
    } else if (index === 9) {
      player.isViceCaptain = true;
      player.isCaptain = false;
    } else {
      player.isViceCaptain = false;
      player.isCaptain = false;
    }
  });

  return ans;
};

function generateRandomPlayers(team) {
  var filteredTeam = [];
  while (filteredTeam.length < 11) {
    var r = Math.floor(Math.random() * team.length - 1) + 1;
    if (filteredTeam.indexOf(r) === -1) {

      if(!filteredTeam.includes(team[r])) {
        filteredTeam.push(team[r]);
      }
    }
  }
  return filteredTeam;
}


getRandomPlayers("csk", "mi")

module.exports = getRandomPlayers