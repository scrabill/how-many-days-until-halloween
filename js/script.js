var message = null;
var halloween = 31;
var d = new Date();
var today = d.getDate(); // return the day of the month as a number 0-30
var daysUntilHalloween = halloween - today;


if (today == halloween) {
	message = "It's Halloween! Stay spooky!"
}

// what if tomorrow is halloween?!?

else {
	message = "There are " + daysUntilHalloween + " days until Halloween"
}

// Display message

spooky.innerText = message;

// fly the witch
function witchFly() {
	witch = document.getElementById("witch");
	pos = 2000;
	var id = setInterval(fly,4);

	function fly() {
		if(pos == -80) {
			clearInterval(id);
		}
		else {
			pos--;
			witch.style.left = pos + "px";
		}
	}
}
