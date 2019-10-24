// Assign DOM elements
const dateCheck = document.querySelector("#dateCheck")
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
        return "It's Halloween! Stay spooky!";
    }

    if (days === 1) {
        return "Halloween is tomorrow! Be afraid, be very afraid!";
    }

    return `There are <span class="red">${days} days</span> until Halloween!`;
};

const today = moment().startOf('day'); // Today
const halloween = moment("31-10", "DD-MM"); // Next Halloween
const message = getMessage(halloween.diff(today, "days")); // Calculate difference

const dt = new Date();
const month = dt.getMonth();
const date = dt.getDate();
const year = dt.getFullYear();


// Display message
spooky.innerHTML = message;

dateCheck.innerHTML = "Today is " + month + "/" + date + "/" + year;