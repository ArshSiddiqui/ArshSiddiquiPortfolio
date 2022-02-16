//To update the description randomly per page reload
var randNum = Math.floor(Math.random() * 7);
const descriptions = ["Professional bucatini enjoyer", "Built for leisure, not for speed", "Person by day, asleep by night", "Was once number one in the world for Phineas and Ferb trivia", "2006 person of the year - Time magazine", "Definitively the opposite of ruthless", "Y-list celebrity"];
document.getElementById("description").innerHTML = descriptions[randNum];
reload();
