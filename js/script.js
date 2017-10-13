var message = null;
var halloween = 31;
var d = new Date();
var today = d.getDate(); // return the day of the month as a number 0-30
var daysUntilHalloween = halloween - today;
// START OF H2 RANDOMIZER
/**
 * QUOTES TAKEN FROM:
 * https://www.huffingtonpost.com/richard-kronick/32-spooky-cute-and-funny-_b_12700872.html
 */
var h2 = document.querySelector('h2')
var RANDOM_TEXT = [
  'Today I can be moody and be a little witch!',
  'Hope all the candies don’t go to WAIST',
  'Free flying lessons, BYOB. Bring your own broom.',
  'Life with you is just getting boo-tter and better.',
  'A candy a day keeps the monsters away.',
  'This letter is sealed with a vampire kiss and bite.',
  'Reese’s in Peace.',
  'May the ghost be with you.'
]
var randomNumber = Math.floor(Math.random() * RANDOM_TEXT.length)
h2.textContent = RANDOM_TEXT[randomNumber]
// END OF H2 RANDOMIZER

if (today == halloween) {
	message = "It's Halloween! Stay spooky!"
}

// what if tomorrow is halloween?!?

else {
	message = "There are " + daysUntilHalloween + " days until Halloween"
}

// Display message

spooky.innerText = message;
