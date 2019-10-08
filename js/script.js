import { costumes } from "./costumes.js";
import { facts } from "./facts.js";

// Assign DOM elements
const spooky = document.querySelector("#spooky");
const jumbotron = document.querySelector(".jumbotron");

// Random facts
const factElement = document.querySelector('#fact');

// Array of Halloween facts
// Source: https://www.womansday.com/life/g485/15-fascinating-halloween-facts-124464/
// Source: https://www.huffingtonpost.in/entry/halloween-weird-facts_n_5948456
// Source: https://www.factretriever.com/halloween-facts
// Source: https://www.history.com/topics/halloween/history-of-trick-or-treating
// Source: https://www.history.com/topics/halloween/pumpkin-facts
// Source: https://www.realsimple.com/holidays-entertaining/holidays/halloween/halloween-fun-facts
// Source: https://edition.cnn.com/2013/06/13/us/halloween-fast-facts/index.html
// Source: https://www.babbel.com/en/magazine/10-spooky-halloween-facts-that-you-might-not-know/
// Source: https://www.canadiangeographic.ca/article/10-things-you-didnt-know-about-halloween-canada
// Source: https://www.officeholidays.com/facts/halloween

// Display message and fact
factElement.innerHTML = facts[Math.floor(Math.random() * facts.length)];

// Assign colors
const colors = {
    spooky: "#ada48f"
};

const getMessage = days => {
    if (days < 0) {
        return `Halloween was ${-days} days ago.`;
    }

    if (days === 0) {
        return "It's Halloween! Stay spooky!";
    }

    if (days === 1) {
        return "Halloween is tomorrow! Be afraid, be very afraid!";
    }

    return `There are only ${days} days until Halloween!`;
};

const today = moment().startOf('day'); // Today
const halloween = moment("31-10", "DD-MM"); // Next Halloween
const message = getMessage(halloween.diff(today, "days")); // Calculate difference

// Display message
spooky.innerHTML = `<div>${message} 👻🎃</div>
                    <div id="outerCostumeBox">
                    <button id="costumeButton">🦇</button>
                    <div id="costumeContent">Got a costume yet?
                     <br>Click on the bat for a random idea!</div>
                    </div>`;

// Map of allowed keys for Konami Code
const allowedKeys = {
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    65: "a",
    66: "b"
};

// 'Official' Konami Code sequence
const konamiCode = ["up", "up", "down", "down", "left", "right", "left", "right", "b", "a"];

// Variable to remember the 'position' the user has reached so far.
let konamiCodePosition = 0;

// Add keydown event listener
document.addEventListener("keydown", e => {
    // Get the value of the key code from the key map
    const key = allowedKeys[e.keyCode];

    // Get the value of the required key from the konami code
    const requiredKey = konamiCode[konamiCodePosition];

    // Compare the key with the required key
    if (key === requiredKey) {

        // Move to the next key in the konami code sequence
        konamiCodePosition++;

        // If the last key is reached, activate cheats
        if (konamiCodePosition === konamiCode.length) {
            doKonami();
            konamiCodePosition = 0;
        }
    } else {
        konamiCodePosition = 0;
    }
});

// Konami function that activates
const doKonami = () => {
    // Changes the CSS of elements into spooky theme
    jumbotron.style.backgroundColor = "transparent";
    spooky.style.color = colors["spooky"];

    document.body.classList.add(["konami"]);

    // Changes the color of all hyperlinks
    document.querySelectorAll("a").forEach(link => {
        if (link.href !== "") {
            link.style.color = colors["spooky"];
        }
    });
};


// Script for Random Costume Picker



//Assign DOM elements
let costumeButton = document.getElementById("costumeButton");
let costumeContent = document.getElementById("costumeContent");
let factButton = document.getElementById("factButton");

//Pick a random costume
const costumeIs = () => {
    let numCostumes = costumes.length;
    let randomNumber = Math.floor((Math.random() * numCostumes));
    return costumes[randomNumber];
}

//Display costume on page with link.
const newCostume = () => {
    var costumes = costumeIs();
    costumeContent.innerHTML = `Got a costume yet?<br>
                                You could be: <a href="${costumes[1]}" target="_blank">${costumes[0]}</a>`;
};

//Add event listener on 'click'
costumeButton.addEventListener('click', newCostume, false);

//display fact
const displayFact = () => {
    factElement.innerHTML = facts[Math.floor(Math.random() * facts.length)];
};

  //add event listener for fact
  factButton.addEventListener('click', displayFact, false);