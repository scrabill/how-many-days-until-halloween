// Assign DOM elements
const spooky = document.querySelector("#spooky");
const jumbotron = document.querySelector(".jumbotron");

// Assign colors
const colors = {
    spooky: "#ada48f"
};

const getMessage = days => {
    if (days < 0) {
        return `Halloween was ${-days} days ago.`;
    }

    if (days === 0) {
        return "It 's Halloween! Stay spooky!";
    }

    if (days === 1) {
        return "Halloween is tomorrow! Be afraid, be very afraid!";
    }

    return `There are still ${days} days until Halloween.`;
};

const today = moment(); // Today
const halloween = moment("31-10", "DD-MM"); // Next Halloween
const message = getMessage(halloween.diff(today, "days")); // Calculate difference

// Display message
spooky.innerHTML = `<div>${message} 👻</div>
                    <div id="outerBox">
                    <button id="costumeButton"><span id="pumpkinEmoji">🎃</span></button>
                    <div id="costumeContent">Got a costume yet?
                     <br>Click the pumpkin for a random idea.</div>
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


// Costume picker

const costumes = [
    ["Napolen Dynamite", "https://i.pinimg.com/originals/26/2a/f4/262af40e4592db053fd8613773e3f5b0.jpg"],
    ["Tom Hanks & Wilson from Castaway","https://www.pinterest.ca/pin/16958936081976494/"],
    ["a 404error", "https://www.instagram.com/p/7QsQ9Vhj9_/?utm_source=ig_embed"],
    ["50 Shades of Grey", "https://www.pinterest.ca/pin/313915036497888806/"]
  ];
  
  let costumeButton = document.getElementById("costumeButton");
  let costumeContent = document.getElementById("costumeContent");
  
  const costumeIs = () => {
    let numCostumes = costumes.length;
    let randomNumber = Math.floor( ( Math.random() * numCostumes ) );
    return costumes[randomNumber];
  }
  
  const newCostume = () => {
    costume = costumeIs();
    costumeContent.innerHTML = `Got a costume yet?<br>
                                You could be:<br>
                                <a href="${costume[1]}" target="_blank">${costume[0]}</a>`;
  };
  
  costumeButton.addEventListener('click', newCostume, false);
  
  
  


