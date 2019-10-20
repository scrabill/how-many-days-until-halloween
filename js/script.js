import { facts, costumes } from "./data.js";

const halloweenMessageElement = document.querySelector("#spooky");
const factContentElement = document.querySelector("#factContent");
const costumeButton = document.querySelector("#costumeButton");
const costumeLink = document.querySelector("#costumeLink");
const factButton = document.querySelector("#factButton");

const colors = {
  spooky: "#ada48f"
};

const getHalloweenCounterMessage = days => {
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

const getRandomeCostume = () => {
  const randomNumber = Math.floor(Math.random() * costumes.length);

  return costumes[randomNumber];
};

const updateFactContent = () => {
  factContentElement.textContent =
    facts[Math.floor(Math.random() * facts.length)];
};

const updateHalloweenMessage = () => {
  const today = moment().startOf("day");
  const halloweenDay = moment("31-10", "DD-MM");
  const message = getHalloweenCounterMessage(halloweenDay.diff(today, "days"));

  halloweenMessageElement.textContent = `${message} 👻🎃`;
};

const updateCostumeContent = () => {
  const { name, url } = getRandomeCostume();

  costumeLink.href = url;
  costumeLink.innerHTML = name;
};

const activateKonamiTheme = () => {
  halloweenMessageElement.style.color = colors["spooky"];
  document.body.classList.add(["konami"]);

  [...document.querySelectorAll("a")]
    .filter(link => link.href !== "")
    .forEach(link => {
      link.style.color = colors["spooky"];
    });
};

const handleCostumeButtonClick = () => {
  costumeLink.focus();
  updateCostumeContent();
};

let konamiCodePosition = 0;
const handleKonamiCodeDetectionOnKeyDown = event => {
  const konamiCode = [
    "up",
    "up",
    "down",
    "down",
    "left",
    "right",
    "left",
    "right",
    "b",
    "a"
  ];
  const allowedKeys = {
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    65: "a",
    66: "b"
  };

  const pressedKey = allowedKeys[event.keyCode];
  const requiredKey = konamiCode[konamiCodePosition];

  if (pressedKey === requiredKey) {
    konamiCodePosition = konamiCodePosition + 1;
    // If the last key is reached, activate cheats
    if (konamiCodePosition === konamiCode.length) {
      activateKonamiTheme();
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
};

function createNewPosition() {
  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;

  const newViewportHeight = Math.floor(Math.random() * viewportHeight);
  const newViewportWidth = Math.floor(Math.random() * viewportWidth);

  return { height: newViewportHeight, width: newViewportWidth };
}

const animateBat = () => {
  const { width, height } = createNewPosition();

  costumeButton.style.top = `${height}px`;
  costumeButton.style.left = `${width}px`;
};

document.addEventListener("keydown", handleKonamiCodeDetectionOnKeyDown);
costumeButton.addEventListener("click", handleCostumeButtonClick, false);
factButton.addEventListener("click", updateFactContent, false);

updateHalloweenMessage();
updateCostumeContent();
updateFactContent();

setInterval(() => {
  animateBat();
}, 700);
