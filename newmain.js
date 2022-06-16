// To update the description randomly per page reload
const descriptions = ["Early to rise, early to bed. Makes a man healthy, but socially dead", "Vaguely European", "My favorite kind of velocity is a non fatal velocity", "Tales from the front of a school bus", "Person by day, asleep by night", "Born to be mild", "Built for leisure, not for speed", "Person by day, asleep by night", "Was once number one in the world for Phineas and Ferb trivia", "2006 person of the year - Time magazine", "Definitively the opposite of ruthless", "Y-list celebrity"];
var randNum = Math.floor(Math.random() * descriptions.length);
document.getElementById("description").innerHTML = descriptions[randNum];



