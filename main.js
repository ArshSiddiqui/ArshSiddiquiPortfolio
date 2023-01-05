// To update the description randomly per page reload
const descriptions = ["Early to rise, early to bed. Makes a man healthy, but socially dead",
						"Vaguely European", "My favorite kind of velocity is a non fatal velocity", 
						"Tales from the front of a school bus", "Person by day, asleep by night", 
						"Born to be mild", "Built for leisure, not for speed", "Person by day, asleep by night",
						"Was once number one in the world for Phineas and Ferb trivia", "2006 person of the year - Time magazine",
						"Definitively the opposite of ruthless", "Y-list celebrity", "Professional amateur", "On the cutting edge of walking",
						"Arsh Siddiqui's primary resource for verifying his job qualifications", "An actual failed writer", 
						"One of the internet's websites of all time", "Almost the winner of a science fair in 2019"];
var randNum = Math.floor(Math.random() * descriptions.length);
document.getElementById("description").innerHTML = descriptions[randNum];

const images = ["./assets/images/MeOnABench.jpg", "./assets/images/MeInKashmir.jpg"];//, "./assets/images/MeInLittleItaly.jpg"
var randImgNum = Math.floor(Math.random() * images.length);
document.getElementById("frontImage").src = images[randImgNum];

if (randImgNum == 1) {
	document.body.style.backgroundColor = "#EBF7FF";
	document.getElementById("title").style.color = "#30334A	";
	document.getElementById("description").style.color = "#30334A";
	document.getElementById("text").style.color = "#EBF7FF";
	document.getElementById("text").style.backgroundColor = "#30334A";
	document.getElementById("contact").style.color = "#30334A";
	document.getElementById("contact").style.backgroundColor = "#EBF7FF";

	document.getElementById("GitHubBtn").style.borderColor = "#30334A";
	document.getElementById("GitHubBtn").style.color = "#30334A";
	document.getElementById("GitHubBtn").style.backgroundColor = "#EBF7FF";
	document.getElementById("GitHubBtn").onmouseover = function() {
		this.style.color = "#4281A4";
		this.style.borderColor = "#4281A4";
		this.style.transition = "1s";
	}
	document.getElementById("GitHubBtn").onmouseout = function() {
		this.style.color = "#30334A";
		this.style.borderColor = "#30334A";
		this.style.transition = "1s";
	}

	document.getElementById("LinkedInBtn").style.borderColor = "#30334A";
	document.getElementById("LinkedInBtn").style.color = "#30334A";
	document.getElementById("LinkedInBtn").style.backgroundColor = "#EBF7FF";
	document.getElementById("LinkedInBtn").onmouseover = function() {
		this.style.color = "#4281A4";
		this.style.borderColor = "#4281A4";
		this.style.transition = "1s";
	}
	document.getElementById("LinkedInBtn").onmouseout = function() {
		this.style.color = "#30334A";
		this.style.borderColor = "#30334A";
		this.style.transition = "1s";
	}

	document.getElementById("WPBtn").style.borderColor = "#EBF7FF";
	document.getElementById("WPBtn").style.color = "#EBF7FF";
	document.getElementById("WPBtn").style.backgroundColor = "#30334A";
	document.getElementById("WPBtn").onmouseover = function() {
		this.style.backgroundColor = "#4281A4";
		this.style.borderColor = "#4281A4";
		this.style.transition = "1s";
	}
	document.getElementById("WPBtn").onmouseout = function() {
		this.style.backgroundColor = "#30334A";
		this.style.borderColor = "#30334A";
		this.style.transition = "1s";
	}

	document.getElementById("AboutBtn").style.borderColor = "#EBF7FF";
	document.getElementById("AboutBtn").style.color = "#EBF7FF";
	document.getElementById("AboutBtn").style.backgroundColor = "#30334A";
	document.getElementById("AboutBtn").onmouseover = function() {
		this.style.backgroundColor = "#4281A4";
		this.style.borderColor = "#4281A4";
		this.style.transition = "1s";
	}
	document.getElementById("AboutBtn").onmouseout = function() {
		this.style.backgroundColor = "#30334A";
		this.style.borderColor = "#30334A";
		this.style.transition = "1s";
	}

	document.getElementById("WPBtn1").style.borderColor = "#EBF7FF";
	document.getElementById("WPBtn1").style.color = "#EBF7FF";
	document.getElementById("WPBtn1").style.backgroundColor = "#30334A";
	document.getElementById("WPBtn1").onmouseover = function() {
		this.style.backgroundColor = "#4281A4";
		this.style.borderColor = "#4281A4";
		this.style.transition = "1s";
	}
	document.getElementById("WPBtn1").onmouseout = function() {
		this.style.backgroundColor = "#30334A";
		this.style.borderColor = "#30334A";
		this.style.transition = "1s";
	}
} else if (randImgNum == 2) {
	document.body.style.backgroundColor = "#000000";
	document.getElementById("title").style.color = "#F9DC5C	";
	document.getElementById("description").style.color = "#F9DC5C";
	document.getElementById("text").style.color = "#000000";
	document.getElementById("text").style.backgroundColor = "#F9DC5C";
	document.getElementById("contact").style.color = "#F9DC5C";
	document.getElementById("contact").style.backgroundColor = "#000000";

	document.getElementById("GitHubBtn").style.borderColor = "#F9DC5C";
	document.getElementById("GitHubBtn").style.color = "#F9DC5C";
	document.getElementById("GitHubBtn").style.backgroundColor = "#000000";
	document.getElementById("GitHubBtn").onmouseover = function() {
		this.style.color = "#FCEEB0";
		this.style.borderColor = "#FCEEB0";
		this.style.transition = "1s";
	}
	document.getElementById("GitHubBtn").onmouseout = function() {
		this.style.color = "#F9DC5C";
		this.style.borderColor = "#F9DC5C";
		this.style.transition = "1s";
	}

	document.getElementById("LinkedInBtn").style.borderColor = "#F9DC5C";
	document.getElementById("LinkedInBtn").style.color = "#F9DC5C";
	document.getElementById("LinkedInBtn").style.backgroundColor = "#000000";
	document.getElementById("LinkedInBtn").onmouseover = function() {
		this.style.color = "#FCEEB0";
		this.style.borderColor = "#FCEEB0";
		this.style.transition = "1s";
	}
	document.getElementById("LinkedInBtn").onmouseout = function() {
		this.style.color = "#F9DC5C";
		this.style.borderColor = "#F9DC5C";
		this.style.transition = "1s";
	}

	document.getElementById("WPBtn").style.borderColor = "#000000";
	document.getElementById("WPBtn").style.color = "#000000";
	document.getElementById("WPBtn").style.backgroundColor = "#F9DC5C";
	document.getElementById("WPBtn").onmouseover = function() {
		this.style.backgroundColor = "#FCEEB0";
		this.style.borderColor = "#FCEEB0";
		this.style.transition = "1s";
	}
	document.getElementById("WPBtn").onmouseout = function() {
		this.style.backgroundColor = "#F9DC5C";
		this.style.borderColor = "#F9DC5C";
		this.style.transition = "1s";
	}

	document.getElementById("AboutBtn").style.borderColor = "#000000";
	document.getElementById("AboutBtn").style.color = "#000000";
	document.getElementById("AboutBtn").style.backgroundColor = "#F9DC5C";
	document.getElementById("AboutBtn").onmouseover = function() {
		this.style.backgroundColor = "#FCEEB0";
		this.style.borderColor = "#FCEEB0";
		this.style.transition = "1s";
	}
	document.getElementById("AboutBtn").onmouseout = function() {
		this.style.backgroundColor = "#F9DC5C";
		this.style.borderColor = "#F9DC5C";
		this.style.transition = "1s";
	}

	document.getElementById("WPBtn1").style.borderColor = "#000000";
	document.getElementById("WPBtn1").style.color = "#000000";
	document.getElementById("WPBtn1").style.backgroundColor = "#F9DC5C";
	document.getElementById("WPBtn1").onmouseover = function() {
		this.style.backgroundColor = "#FCEEB0";
		this.style.borderColor = "#FCEEB0";
		this.style.transition = "1s";
	}
	document.getElementById("WPBtn1").onmouseout = function() {
		this.style.backgroundColor = "#F9DC5C";
		this.style.borderColor = "#F9DC5C";
		this.style.transition = "1s";
	}
}