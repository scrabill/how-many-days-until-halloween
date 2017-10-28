/*
    88        88           88  88  88           88
    88        88    ,d     ""  88  ""    ,d     ""
    88        88    88         88        88
    88        88  MM88MMM  88  88  88  MM88MMM  88   ,adPPYba,  ,adPPYba,
    88        88    88     88  88  88    88     88  a8P_____88  I8[    ""
    88        88    88     88  88  88    88     88  8PP"""""""   `"Y8ba,
    Y8a.    .a8P    88,    88  88  88    88,    88  "8b,   ,aa  aa    ]8I
     `"Y8888Y"'     "Y888  88  88  88    "Y888  88   `"Ybbd8"'  `"YbbdP"'
*/

// Generates a random number between min and max inclusive.
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Selects a random number from 0 upto the size of the list array.
function randFromList(list) {
    return list[rand(0, list.length - 1)];
}

/*
    888888888888                                 88
         88                                      88
         88                                      88
         88  8b,dPPYba,  ,adPPYYba,   ,adPPYba,  88   ,d8   ,adPPYba,  8b,dPPYba,
         88  88P'   "Y8  ""     `Y8  a8"     ""  88 ,a8"   a8P_____88  88P'   "Y8
         88  88          ,adPPPPP88  8b          8888[     8PP"""""""  88
         88  88          88,    ,88  "8a,   ,aa  88`"Yba,  "8b,   ,aa  88
         88  88          `"8bbdP"Y8   `"Ybbd8"'  88   `Y8a  `"Ybbd8"'  88
*/

// Possible splash texts that are displayed on page load.
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
    "Don’t Make Me Get The Flying Monkeys"
];

// Calculates how many days are remaining to Halloween day from the current day.
function getDaysUntilHalloween() {
    var d = new Date();
    var today = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    var year = today.getFullYear();

    if (today.getMonth() > 9) year += 1;

    var halloween = new Date(year, 9, 31);
    var elapsedTime = halloween - today;

    return Math.floor(elapsedTime / 86400000);
}

// Display's different messages based on, if Halloween is today, tomorrow or after some days.
function calculateDaysLeft() {
    var daysUntilHalloween = getDaysUntilHalloween();

    if (daysUntilHalloween === 0) {
        document.getElementById("spooky").innerText = "It's Halloween!";

    } else if (daysUntilHalloween === 1) {
        document.getElementById("spooky").innerText = "Tomorrow is Halloween!";

    } else {
        document.getElementById("spooky").innerText = "There are " + daysUntilHalloween + " days until Halloween.";
    }
}

/*
     ad88888ba
    d8"     "8b
    Y8,
    `Y8aaaaa,     ,adPPYba,   ,adPPYba,  8b,dPPYba,    ,adPPYba,
      `"""""8b,  a8"     ""  a8P_____88  88P'   `"8a  a8P_____88
            `8b  8b          8PP"""""""  88       88  8PP"""""""
    Y8a     a8P  "8a,   ,aa  "8b,   ,aa  88       88  "8b,   ,aa
     "Y88888P"    `"Ybbd8"'   `"Ybbd8"'  88       88   `"Ybbd8"'
*/

// Wrap the entire scene script so we can execute it once the document is ready.

function scene() {
    // Random message is displayed from splashText array.
    document.getElementById("splashText").innerText = randFromList(splashText);

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var batImage = loadImage("img/bat.png");
    var bats = [];
    var nextBatSpawn = 0;

    calculateDaysLeft();
    setInterval(calculateDaysLeft, 60);

    canvasAutoFullScreen();
    draw();

    function draw() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        requestAnimationFrame(draw);

        if (nextBatSpawn < Date.now()) spawnBat();

        handleBats();
    }

    // Calculates the Rotation direction and death time of the bat.
    function spawnBat() {
        nextBatSpawn = Date.now() + rand(500, 1500);

        bats.push({
            x: rand(50, canvas.width - 50),
            y: rand(50, canvas.height - 50),
            degrees: rand(-45, 45),
            rotationDirection: (rand(0, 100) < 50 ? 2 : -2),
            deathTime: Date.now() + rand(1000, 5000),
            scale: .2,
        });
    }

    // Displays bats based on their time and current date.
    function handleBats() {
        for (var i = bats.length - 1; i >= 0; i--) {
            var bat = bats[i];

            if (bat.deathTime < Date.now()) {
                bats.splice(i, 1);
                continue;
            }

            drawImage(batImage, bat.x, bat.y, bat.scale, bat.degrees);

            bat.degrees += bat.rotationDirection;
            bat.scale += .003;

            if (bat.degrees < -45 || bat.degrees > 45) bat.rotationDirection *= -1;
        }
    }

    // Bat image is loaded from the source folder
    function loadImage(src) {
        var image = new Image();
        image.src = src;

        return image;
    }

    function drawImage(image, x, y, scale, degrees) {
        context.save();
        context.translate(x, y);
        context.rotate(degrees * Math.PI / 180);

        context.drawImage(
            image,
            -image.width * scale / 2,
            -image.height * scale / 2,
            image.width * scale,
            image.height * scale
        );

        context.restore();
    }

    function canvasAutoFullScreen() {
        window.onresize = function() {
            canvas.height = window.innerHeight;
            canvas.width = window.innerWidth;
        }

        window.onresize();
    }
}

// Use jQuery to run the scene function and get things going.
$(document).ready(scene);
