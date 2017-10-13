var daysUntilHalloween = getDaysUntilHalloween();

if (daysUntilHalloween === 0){
	document.getElementById("spooky").innerText = "It's Halloween! Stay spooky!";
}
else if (daysUntilHalloween === 1){
	document.getElementById("spooky").innerText = "Tomorrow is Halloween!";
}
else{
	document.getElementById("spooky").innerText = "There are "+daysUntilHalloween+" days until Halloween.";
}

function getDaysUntilHalloween(){
	var today = new Date();
	var year = today.getFullYear();
	if (today.getMonth() > 9)
		year += 1;
	var halloween = new Date(year, 9, 30);
	var elapsedTime = halloween-today;
	return Math.floor(elapsedTime/86400000);
}
