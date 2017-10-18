var message = null;
var halloween = 31;
var d = new Date();
var today = d.getDate(); // return the day of the month as a number 0-30
var month = d.getMonth();
var daysUntilHalloween = halloween - today;

if (month == 9){
	if (today == halloween) {
		message = "It's Halloween! Stay spooky!"
	}

	// what if tomorrow is halloween?!?

	else {
		message = "There are " + daysUntilHalloween + " days until Halloween"
	}
}
	
else {
	message = "Check back in October!"
}



// Display message

spooky.innerText = message;
