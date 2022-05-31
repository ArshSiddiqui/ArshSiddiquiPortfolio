//ScriptGeneratedPoe.js

function readTextFile(file, callback) {
	var rawFile = new XMLHttpRequest();
	rawFile.overrideMimeType("application/json");
	rawFile.open("GET", file, true);
	rawFile.onreadystatechange = function() {
		if (rawFile.readyState === 4 && rawFile.status === 200) {
			console.log("in the block");
			callback(rawFile.responseText);
		}
	}
	rawFile.send(null);
}

console.log("-------------------------------");
readTextFile("https://raw.githubusercontent.com/ArshSiddiqui/TheSunNeverSetsOnTheAmericanMilitaryBase/main/AmericanBases.json", function(text) {
	console.log("inside");
	var data = JSON.parse(text);
	console.log(text);
	var timeout = 1000;
	var randNum = Math.floor(Math.random() * 129 / 3);
	var poemIndex = randNum * 3;
	for (var i = 0; i < 3; i++) {
		const item = document.createElement("p");
		const node = document.createTextNode(poemIndex + i);
		item.appendChild(node);
		console.log(node);
	}
})