"use strict";

var _costumes = require("./costumes.js");

var _facts = require("./facts.js");

// Assign DOM elements
var spooky = document.querySelector("#spooky");
var jumbotron = document.querySelector(".jumbotron"); // Random facts

var factElement = document.querySelector('#fact'); // Array of Halloween facts
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

factElement.innerHTML = _facts.facts[Math.floor(Math.random() * _facts.facts.length)]; // Assign colors

var colors = {
  spooky: "#ada48f"
};

var getMessage = function getMessage(days) {
  if (days < 0) {
    return "Halloween was ".concat(-days, " days ago.");
  }

  if (days === 0) {
    return "It's Halloween! Stay spooky!";
  }

  if (days === 1) {
    return "Halloween is tomorrow! Be afraid, be very afraid!";
  }

  return "There are only ".concat(days, " days until Halloween!");
};

var today = moment().startOf('day'); // Today

var halloween = moment("31-10", "DD-MM"); // Next Halloween

var message = getMessage(halloween.diff(today, "days")); // Calculate difference
// Display message

spooky.innerHTML = "<div>".concat(message, " \uD83D\uDC7B\uD83C\uDF83</div>\n                    <div id=\"outerCostumeBox\">\n                    <button id=\"costumeButton\">\uD83E\uDD87</button>\n                    <div id=\"costumeContent\">Got a costume yet?\n                     <br>Click on the bat for a random idea!</div>\n                    </div>"); // Map of allowed keys for Konami Code

var allowedKeys = {
  37: "left",
  38: "up",
  39: "right",
  40: "down",
  65: "a",
  66: "b"
}; // 'Official' Konami Code sequence

var konamiCode = ["up", "up", "down", "down", "left", "right", "left", "right", "b", "a"]; // Variable to remember the 'position' the user has reached so far.

var konamiCodePosition = 0; // Add keydown event listener

document.addEventListener("keydown", function (e) {
  // Get the value of the key code from the key map
  var key = allowedKeys[e.keyCode]; // Get the value of the required key from the konami code

  var requiredKey = konamiCode[konamiCodePosition]; // Compare the key with the required key

  if (key === requiredKey) {
    // Move to the next key in the konami code sequence
    konamiCodePosition++; // If the last key is reached, activate cheats

    if (konamiCodePosition === konamiCode.length) {
      doKonami();
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
}); // Konami function that activates

var doKonami = function doKonami() {
  // Changes the CSS of elements into spooky theme
  jumbotron.style.backgroundColor = "transparent";
  spooky.style.color = colors["spooky"];
  document.body.classList.add(["konami"]); // Changes the color of all hyperlinks

  document.querySelectorAll("a").forEach(function (link) {
    if (link.href !== "") {
      link.style.color = colors["spooky"];
    }
  });
}; // Script for Random Costume Picker
//Assign DOM elements


var costumeButton = document.getElementById("costumeButton");
var costumeContent = document.getElementById("costumeContent");
var factButton = document.getElementById("factButton"); //Pick a random costume

var costumeIs = function costumeIs() {
  var numCostumes = _costumes.costumes.length;
  var randomNumber = Math.floor(Math.random() * numCostumes);
  return _costumes.costumes[randomNumber];
}; //Display costume on page with link.


var newCostume = function newCostume() {
  costume = costumeIs();
  costumeContent.innerHTML = "Got a costume yet?<br>\n                                You could be: <a href=\"".concat(costume[1], "\" target=\"_blank\">").concat(costume[0], "</a>");
}; //Add event listener on 'click'


costumeButton.addEventListener('click', newCostume, false); //display fact

var displayFact = function displayFact() {
  factElement.innerHTML = _facts.facts[Math.floor(Math.random() * _facts.facts.length)];
}; //add event listener for fact


factButton.addEventListener('click', displayFact, alse);