/* Updates spooky to reflect number of days until Halloween */
function calculateDaysLeft(){
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
];

/* Updates splashText with a string randomly selected from splashText array */
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

/* Returns the number of days until Halloween */
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

/* Generates a random number within a range */
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

/* Utilizes rand to retrieve an element at random from a list */
function randFromList(list){
	return list[rand(0, list.length-1)];
}
