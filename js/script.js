var message = null;
var halloween = new Date(2017, 9, 31);
var today = new Date();
var millisPerDay = 1000*60*60*24;


var millisToHalloween = halloween.getTime() - today.getTime();
var daysToHalloween = Math.round(millisToHalloween / millisPerDay) % 365;

console.log(daysToHalloween);


if (daysToHalloween == 0) {
	message = "It's Halloween! Stay spooky!"
}

// what if tomorrow is halloween?!?

else {
	message = "There are " + daysToHalloween + " days until Halloween"
}

// Display message

spooky.innerText = message;