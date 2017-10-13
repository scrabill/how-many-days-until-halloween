var message = null;
var d = new Date();
var halloween = new Date(d.getFullYear(), 9, 31);
var today = new Date(d.getFullYear(), d.getMonth(), d.getDate()); // return today's date
var oneDay = 1000 * 60 * 60 * 24; //
var daysUntilHalloween = (halloween - today) / oneDay;

if (today == halloween) {
	message = "It's Halloween! Stay spooky!"
}

// what if tomorrow is halloween?!?

else {
	message = "There are " + daysUntilHalloween + " days until Halloween"
}

// Display message

spooky.innerText = message;
