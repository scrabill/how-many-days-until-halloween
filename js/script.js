var message, messages, randomNumber = null;
var halloween = 31;
var d = new Date();
var today = d.getDate(); // return the day of the month as a number 0-30
var month = d.getMonth();
var daysUntilHalloween = halloween - today;

if (month == 9){
	if (today == halloween) {
		message = "It's Halloween! Stay spooky!"
	}

	// what if tomorrow is halloween?!?

	else {
		message = "There are " + daysUntilHalloween + " days until Halloween"
	}
}
	
else {
	message = "Check back in October!"
}



// Display message

spooky.innerText = message;
$(document).ready(function(){
  messages = [
     "On Halloween, witches come true; Wild ghosts escape from dreams. Each monster dances in the park.... ",
     "When witches go riding, and black cats are seen, the moon laughs and whispers, tis near Halloween.",
     "Where there is no imagination there is no horror.",
     "Best Withces.",
     "Happy Hunting.",
     "Practice safe hex.",
     "I want my mummy.",
     "Free Broom with flying lessons.",
     "Fangs for the memories and nightmares.",
     "Booooo spoken here.",
     "If the broom fits, fly it.",
     "Demons are ghoul's best friend.",
     "Hang around for spell."
  ]
  var randomNumber = Math.floor(Math.random()*messages.length);
  $('#message-of-the-day').html(messages[randomNumber]);
});
