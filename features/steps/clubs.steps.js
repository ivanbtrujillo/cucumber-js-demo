const assert = require("assert");
const { Given, Then } = require("@cucumber/cucumber");

Given("the following clubs and their stadiums", function (stadiums) {
  this.stadiums = stadiums.raw();
  const expected = [
    ["Juventus", "Allianz Stadium"],
    ["AC Milan", "San Siro"],
    ["AS Roma", "Stadio Olimpico"]
  ];
  assert.deepStrictEqual(stadiums.raw(), expected);
});
Then("{string} stadium should be {string}", function (team, stadium) {
  const selectedTeam = {
    team: this.stadiums[0][0],
    stadium: this.stadiums[0][1]
  };
  this.selectedTeam = selectedTeam;
  assert.strictEqual(team, selectedTeam.team);
  assert.strictEqual(stadium, selectedTeam.stadium);
});

Then("{string} should not be {string}", function (team, stadium) {
  assert.notStrictEqual(team, this.selectedTeam.team);
  assert.equal(stadium, this.selectedTeam.stadium);
  this.selectedTeam.stadium = this.stadiums[1][1];
});

Then("{string} should be {string}", function (team, stadium) {
  assert.notStrictEqual(team, this.selectedTeam.team);
  assert.equal(stadium, this.selectedTeam.stadium);
});
