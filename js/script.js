var message = null;
var halloween = 31;
var d = new Date();
var today = d.getDate(); // returns the day of the month as a number from 1 to 31
var month = d.getMonth(); // returns the month (from 0 to 11) for the specified date 
var daysUntilHalloween = halloween - today;


if (today == halloween && month+1 == 10) {	
	message = "It's Halloween! Stay spooky!"
}
// what if tomorrow is halloween?!?

else {
	message = "There are " + daysUntilHalloween + " days until Halloween"
}

// Display message

spooky.innerText = message;
