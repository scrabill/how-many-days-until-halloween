var daysUntilHalloween = getDaysUntilHalloween();

if (daysUntilHalloween === 0){
	document.getElementById("spooky").innerText = "It's Halloween!";
}
else if (daysUntilHalloween === 1){
	document.getElementById("spooky").innerText = "Tomorrow is Halloween!";
}
else{
	document.getElementById("spooky").innerText = "There are "+daysUntilHalloween+" days until Halloween.";
}

function getDaysUntilHalloween(){
	var today = new Date();
	var year = today.getFullYear();
	if (today.getMonth() > 9)
		year += 1;
	var halloween = new Date(year, 9, 30);
	var elapsedTime = halloween-today;
	return Math.floor(elapsedTime/86400000);
}

var splashText = [
	"Best Witches",
	"Chills and Thrills",
	"Don't be a scaredy cat!",
	"Trick or Treat!",
	"Free Broom Rides!",
	"Time for a coffin break.",
	"Carve out some good times!",
	"Ghostly Greetings",
];

document.getElementById("splashText").innerText = randFromList(splashText);

function rand(min, max){
	min = parseInt(min, 10);
	max = parseInt(max, 10);
	if (max < min){
		var temp = max;
		max = min;
		min = temp;
	}
	return Math.floor(Math.random()*(max-min+1))+min;
}

function randFromList(list){
	return list[rand(0, list.length-1)];
}