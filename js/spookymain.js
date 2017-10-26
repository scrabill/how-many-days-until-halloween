/*
Display's different messages based on, if Halloween is today, tomorrow or after some days.
*/

function calculateDaysLeft(){
	var daysUntilHalloween = getDaysUntilHalloween();
	var title = document.getElementById("spooky");

	if (daysUntilHalloween === 0){
		title.innerText = "It's Halloween!";
	}
	else if (daysUntilHalloween === 1){
		title.innerText = "Tomorrow is Halloween!";
	}
	else{
		title.innerText = "There are " + daysUntilHalloween + " days until Halloween.";
	}
}
calculateDaysLeft();
setInterval(calculateDaysLeft, 60);

var splashText = [
	"Best Witches",
	"Chills and Thrills",
	"Don't be a scaredy cat!",
	"Trick or Treat!",
	"Free Broom Rides!",
	"Time for a coffin break.",
	"Carve out some good times!",
	"Ghostly Greetings",
	"Trick or Treat Yo Self!",
	"Gobble Til You Wobble",
	"Come In For a Bite",
	"I Ain’t Afraid of No Ghost",
	"Eat, Drink and be Scary!",
	"Creep it Real",
	"Drink Up Witches!",
	"If You’ve Got It, Haunt it",
	"Don’t Make Me Get The Flying Monkeys",
	"Cheers Witches"
];


//Random message is displayed from splashText array.
document.getElementById("splashText").innerText = randFromList(splashText);

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var batImage = loadImage("img/bat.png");
var bats = [];
var nextBatSpawn = 0;

canvasAutoFullScreen();
draw();

function draw(){
	context.clearRect(0, 0, canvas.width, canvas.height);
	requestAnimationFrame(draw);
	if (nextBatSpawn < Date.now())
		spawnBat();
	handleBats();
}

/*
Calculates the Rotation direction and death time of the bat.
*/

function spawnBat(){
	nextBatSpawn = Date.now()+rand(500, 1500);
	bats.push({
		x: rand(50, canvas.width-50),
		y: rand(50, canvas.height-50),
		degrees: rand(-45, 45),
		rotationDirection: (rand(0, 100) < 50 ? 2 : -2),
		deathTime: Date.now()+rand(1000, 5000),
		scale: .2,
	});
}

/*
Displays bats based on their time and current date.
*/

function handleBats(){
	for (var i = bats.length-1; i >= 0; i--){
		var bat = bats[i];
		if (bat.deathTime < Date.now()){
			bats.splice(i, 1);
			continue;
		}
		drawImage(batImage, bat.x, bat.y, bat.scale, bat.degrees);
		bat.degrees += bat.rotationDirection;
		bat.scale += .003;
		if (bat.degrees < -45 || bat.degrees > 45)
			bat.rotationDirection *= -1;
	}
}

/*
Bat image is loaded from the source folder
*/
function loadImage(src){
	var image = new Image();
	image.src = src;
	return image;
}

function drawImage(image, x, y, scale, degrees){
	context.save();
	context.translate(x, y);
	context.rotate(degrees*Math.PI/180);
	context.drawImage(image, -image.width*scale/2, -image.height*scale/2, image.width*scale, image.height*scale);
	context.restore();
}

function canvasAutoFullScreen(){
	window.onresize = function(){
		canvas.height = window.innerHeight;
		canvas.width = window.innerWidth;
	}
	window.onresize();
}

/*
Calculates how many days are remaining to Halloween day from the current day.
*/

function getDaysUntilHalloween(){
	var d = new Date();
	var today = new Date(d.getFullYear(), d.getMonth(), d.getDate());
	var year = today.getFullYear();
	if (today.getMonth() > 9)
		year += 1;
	var halloween = new Date(year, 9, 31);
	var elapsedTime = halloween-today;
	return Math.floor(elapsedTime/86400000);
}

// Generates a random number between min and max inclusive.
function rand(min, max){
	return Math.floor(Math.random()*(max-min+1))+min;
}

/*
Selects a random number from 0 upto the size of the list array.
*/

function randFromList(list){
	return list[rand(0, list.length-1)];
}
