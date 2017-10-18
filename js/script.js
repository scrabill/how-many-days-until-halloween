var message = null;
var halloween = 31;
var d = new Date();
var today = d.getDate(); // return the day of the month as a number 0-30
var currentMonth = d.getMonth(); // return the current month as a number 0-11
var daysUntilHalloween = halloween - today;


if (currentMonth == 9 && today == halloween) {
	message = "It's Halloween! Stay spooky!"
}

// what if tomorrow is halloween?!?

else {
	message = "There are " + daysUntilHalloween + " days until Halloween"
}

// Display message

spooky.innerText = message;