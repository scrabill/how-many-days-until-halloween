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
                    <div id="outerCostumeBox">
                    <button id="costumeButton">🎃</button>
                    <div id="costumeContent">Got a costume yet?
                     <br>Click the pumpkin for a random idea!</div>
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

const costumes = [
    ["Napolen Dynamite", "https://i.pinimg.com/originals/26/2a/f4/262af40e4592db053fd8613773e3f5b0.jpg"],
    ["Castaway","https://www.pinterest.ca/pin/16958936081976494/"],
    ["a 404error", "https://www.instagram.com/p/7QsQ9Vhj9_/?utm_source=ig_embed"],
    ["50 Shades of Grey", "https://i.pinimg.com/474x/9a/45/42/9a454265d6a6e59ba609831a1b7c7028--so-funny-funny-stuff.jpg"],
    ["Octocat", "https://twitter.com/Bint_alBeatz/status/793178052494815233"],
    ["The Shining", "https://i.pinimg.com/originals/21/e3/a9/21e3a9859795366b7cc1b7aa3c8ed598.jpg"]
    ["Tamagotchi", "https://www.pinterest.ca/pin/192810427770341992/"],
    ["Clippy","https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F83%2F37%2F31%2F8337315668b57bcbf4fcb82a4fde2a99.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F518758450798995072%2F&docid=zgMyyDogGc7eJM&tbnid=Ex7IH-SdFvQoaM%3A&vet=10ahUKEwjXjKbr0_ndAhWL1FkKHZg5DfYQMwg7KAEwAQ..i&w=650&h=975&safe=off&client=firefox-b-ab&bih=781&biw=1440&q=halloween%20clippy&ved=0ahUKEwjXjKbr0_ndAhWL1FkKHZg5DfYQMwg7KAEwAQ&iact=mrc&uact=8"],
    ["Mark Zuckerberg", "https://costumewall.com/dress-like-mark-zuckerberg/"]
  ];
  
  //Assign DOM elements
  let costumeButton = document.getElementById("costumeButton");
  let costumeContent = document.getElementById("costumeContent");
  
  //Pick a random costume
  const costumeIs = () => {
    let numCostumes = costumes.length;
    let randomNumber = Math.floor( ( Math.random() * numCostumes ) );
    return costumes[randomNumber];
  }
  
  //Display costume on page with link.
  const newCostume = () => {
    costume = costumeIs();
    costumeContent.innerHTML = `Got a costume yet?<br>
                                You could be: <a href="${costume[1]}" target="_blank">${costume[0]}</a>`;
  };
  
  //Add event listener on 'click'
  costumeButton.addEventListener('click', newCostume, false);
  
  
  


