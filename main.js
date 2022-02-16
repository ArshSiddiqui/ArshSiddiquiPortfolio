//To update the description randomly per page reload
var randNum = Math.floor(Math.random() * 2);
const descriptions = ["Professional bucatini enjoyer", "Built for leisure, not for speed"];
document.getElementById("description").innerHTML = descriptions[randNum];
reload();
