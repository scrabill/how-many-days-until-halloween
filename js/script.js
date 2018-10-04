var message = null;
var halloween = 31;
var d = new Date();
var today = d.getDate(); // return the day of the month as a number 0-30
var daysUntilHalloween = halloween - today;

  if (today == halloween) {
	message = "It's Halloween! Stay spooky!"
}

  else {
	message = "There are " + daysUntilHalloween + " days until Halloween!"
}
 // Display message
 spooky.innerText = message;


 // Map of allowed keys
 var allowedKeys = {
   37: 'left',
   38: 'up',
   39: 'right',
   40: 'down',
   65: 'a',
   66: 'b'
 };

 // 'Official' Konami Code sequence
 var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

 // Variable to remember the 'position' the user has reached so far.
 var konamiCodePosition = 0;

 // Add keydown event listener
 document.addEventListener('keydown', function(e) {
   // Get the value of the key code from the key map
   var key = allowedKeys[e.keyCode];
   // Get the value of the required key from the konami code
   var requiredKey = konamiCode[konamiCodePosition];

   // Compare the key with the required key
   if (key == requiredKey) {

     // Move to the next key in the konami code sequence
     konamiCodePosition++;

     // If the last key is reached, activate cheats
     if (konamiCodePosition == konamiCode.length) {
       activateCheats();
       konamiCodePosition = 0;
     }
   } else {
     konamiCodePosition = 0;
   }
 });

// Konami function that activates
 function activateCheats() {
   // Changes css of elements into spooky theme
   document.getElementById("jumbotron-background").style.backgroundColor = "transparent";
   document.getElementById("spooky").style.color = "#ada48f";
   document.body.style.backgroundImage = "url('https://i.ytimg.com/vi/v4zU8Is-lDY/maxresdefault.jpg')";
   document.body.style.backgroundColor = "black";
   document.body.style.color = "#ada48f";
   // Changes the color of all hyperlinks
   var links = document.getElementsByTagName('a');
   for(var i=0;i<links.length;i++)
    {
        if(links[i].href)
        {
            links[i].style.color = "#ada48f";
        }
    }
}
