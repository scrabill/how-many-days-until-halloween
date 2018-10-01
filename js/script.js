var message = null;
var halloween = 31;
var d = new Date();
var today = d.getDate(); // return the day of the month as a number 0-30
var daysUntilHalloween = halloween - today;

  if (today == halloween) {
	message = "It's Halloween! Stay spooky!"
}

  else {
	message = "There are " + daysUntilHalloween + " days until Halloween"
}
 // Display message
 spooky.innerText = message;
