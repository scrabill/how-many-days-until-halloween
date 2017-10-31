/*
Displays different messages based on, if Halloween is today, tomorrow or after some days.
*/

function calculateDaysLeft(){
	var daysUntilHalloween = getDaysUntilHalloween();

	if (daysUntilHalloween === 0){
		document.getElementById("spooky").innerText = "It's Halloween!";
	}
	else if (daysUntilHalloween === 1){
		document.getElementById("spooky").innerText = "Tomorrow is Halloween!";
	}
	else{
		document.getElementById("spooky").innerText = "There are " + daysUntilHalloween + " days until Halloween.";
	}
}
calculateDaysLeft();
setInterval(calculateDaysLeft, 60);

var splashText = [
	"Don't Underestimate Me",
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
	"I See Dead People",
	"Shaay Hello To My Little Friend!",
	"Be the Scariest Thing in These Woods",
	"Thrilling, Chilling, Spine Curling",
	"Embrace the Pumpkin Spice",
	"I Got 99 Problems But a Witch Ain't One",
  	"Witch better have my candy!",
	"Franken-tastic!",
	"Got Ghosts?",
	"Happy Howl-o-Ween.",
	"If the broom fits, ride it!",
	"I am a good witch most of the times",
	"A Haunting We Will Go",
	"Beary Be-Witching",
	"Causion! Black Cat Crossing",
	"Bugs and Hisses!",
	"Be Afraid. Be Very Afraid.",
	"Happy Haunting!",
	"Skeletons Make Great Friends",
	"Stop In For a Spell",
	"Boogeyman Says Hi",
  	"When black cats prowl and pumpkins gleam, May luck be yours on Halloween",
	"To scream or not to scream",
	"When witches go riding, and black cats are seen, the moon laughs and whispers 'tis near Halloween",
	"There is magic in the night when pumpkins glow by moonlight"
];

var splashElement = document.getElementById("splashText")
//Random message is displayed from splashText array.
splashElement.innerText = randFromList(splashText);

//Onclick of splashText, random message changes.
splashElement.onclick = function showNewSplash() {
	splashElement.innerText = randFromList(splashText);
}

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var batImage = loadImage("img/bat.png");
var bats = [];
var nextBatSpawn = 0;

canvasAutoFullScreen();
draw();
registerClickSpawn();

function draw(){
	context.clearRect(0, 0, canvas.width, canvas.height);
	requestAnimationFrame(draw);
	if (nextBatSpawn < Date.now())
		spawnBat(rand(50, canvas.width-50), rand(50, canvas.height-50));
	handleBats();
}

/*
Calculates the Rotation direction and death time of the bat.
*/

function spawnBat(x, y){
	nextBatSpawn = Date.now()+rand(500, 1500);
	bats.push({
		x: x,
		y: y,
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

function registerClickSpawn(){
	canvas.onclick = clickSpawnBat
	centerDivs = document.getElementsByClassName("jumbotron");
	for (var i = 0; i < centerDivs.length; i++){
		centerDivs[i].onclick = clickSpawnBat;
	}
}

function clickSpawnBat(event){
	spawnBat(event.clientX, event.clientY);
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

/*
Night mode
*/

(function(){
	var nightButton = document.getElementById('nightButton');
	var isItNight = false;

	function toggleNight(){		 	
		var background = isItNight ? "" : "linear-gradient(to bottom, black , #011a42)";
		var textColor = isItNight ? "" : "#ff6600"; 

		document.querySelector('body').style.background = background;

		var elems = document.querySelectorAll('p, a, button');
		for(var i = 0; i < elems.length; i++){
			elems[i].style.color = textColor;
			elems[i].style.borderColor = textColor;
		}
		
		isItNight = !isItNight;
	}
	nightButton.addEventListener('click', toggleNight);
})();
