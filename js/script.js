// Assign DOM elements
const spooky = document.querySelector("#spooky");

const getMessage = (days, isFriday13) => {
    let message = `There are <br> <span class="red">${days} days</span> <br> until Halloween!`;

    if (days < 0) {
        message = `Halloween was <span class="red">${-days} days</span>  ago.`;
    }

    if (days === 0) {
        message = "It's Halloween! Stay spooky!";
    }

    if (days === 1) {
        message = "Halloween is tomorrow! Be afraid, be very afraid!";
    }

    return isFriday13 ? `Happy Friday the 13th! ${message}` : message;
};

const today = moment().startOf("day"); // Today
const halloween = moment("31-10", "DD-MM"); // Next Halloween
const isFriday13 = (today.day() == 5) && (today.date() == 13); // Check if it is Friday (5) and it is day 13th.
const message = getMessage(halloween.diff(today, "days"), isFriday13); // Calculate difference

// Display message
spooky.innerHTML = message;
