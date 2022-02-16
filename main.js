var randNum = Math.floor(Math.random() * 2);
if (randNum == 0) {
  document.getElementById("description").innerHTML = "Professional bucatini enjoyer";
  reload();
}
if (randNum == 1) {
  document.getElementById("description").innerHTML = "Built for leisure, not for speed";
  reload();
}
