// Assign DOM elements
const spooky = document.querySelector("#spooky");
const jumbotron = document.querySelector(".jumbotron");

// Random facts
const factElement = document.querySelector('#fact');

// Array of Halloween facts
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

const facts = [
    'The first jack-o`-lanterns were made out of potatoes and turnips',
    'Per-person, Americans spend about $86.13 on Halloween every year.',
    'Americans are expected to spend nearly $9 billion this year, according to the National Retail Federation.',
    'California, Illinois, Michigan, New York, Ohio, and Pennsylvania produce the majority of pumpkins for Halloween – over 1 billion pounds a year!',
    'The name Jack-O-Lantern first originated from an Irish folktale about a man named Stingy Jack who tricked the Devil over and over again. When Jack died, he was forced to walk the Earth with only a carved-out turnip and burning coal to help light his way.',
    '99% of all pumpkins sold are used as Jack-O-Lanterns for Halloween.',
    'The Plymouth Colony Pilgrims started the superstition about black cats.',
    'Tootsie Rolls, Smarties, and candy corn were among the most hated candies in 2017.',
    'Most of people is afraid of ghosts because they can\'t see them.',
    'Reese\'s Peanut Butter Cups were 2017\'s most popular Halloween candy.',
    'At one time, it was customary to perform dances, songs, prayers, and plays in order to receive treats.',
    'Silly String is banned in Hollywood on Halloween.',
    'In 2014, the total estimated cost of all Halloween costumes was $2.8 billion.',
    'Candy Corn was created in 1898 and 35 million pounds of it are made every year.',
    'Candy corn has been made with the same recipe by the Jelly Belly Candy Company since 1898.',
    'Halloween in the second largest consumer holiday in the United States. Consumers spent about $7 billion in 2015.',
    'Guinness World Records has named the Haunted Cave in Lewisburg, Ohio as the world\'s longest haunted house. It measures 3,564 feet long and is located 80 feet below ground in an abandoned mine.',
    'Harry Houdini died on Halloween in 1926.',
    'Trunk-or-Treating was created as a safer alternative to Trick-or-Treating in 2000.',
    'Halloween ranks as the sixth most popular card-giving holiday, with 20 million cards sent each year.',
    'In 2017, the most popular pet costumes were pumpkins, hot dogs, and a tie between a dog, lion, and pirate.',
    'Candy Corn was originally known as \'chicken feed\'',
    'Samhainophobia is the fear of Halloween.',
    'Halloween is thought to have originated around 4000 B.C., which means Halloween has been around for over 6,000 years.',
    'The first Jack O’Lanterns were actually made from turnips.',
    'Some animal shelters won\'t allow the adoption of black cats around Halloween for fear they\'ll be sacrificed.',
    'In a few American towns, Halloween was originally referred to as \'Cabbage Night.\'',
    'The first Jack O\’Lanterns were actually made from turnips.',
    'Samhainophobia is the fear of Halloween.',
    'The largest pumpkin ever measured was grown by Norm Craven, who broke the world record in 1993 with a 836 lb. pumpkin.',
    'Trick-or-treating evolved from the ancient Celtic tradition of putting out treats and food to placate spirits who roamed the streets at Samhain, a sacred festival that marked the end of the Celtic calendar year.',
    'The first known mention of trick-or-treating in print in North America occurred in 1927 in Blackie, Alberta, Canada.',
    'Ireland is typically believed to be the birthplace of Halloween.',
    'Scarecrows, a popular Halloween fixture, symbolize the ancient agricultural roots of the holiday.',
    'Halloween has variously been called All Hallows’ Eve, Witches Night, Lamswool, Snap-Apple Night, Samhaim, and Summer’s End.',
    'In 2010, 72.2% of those surveyed by the National Retail Federation will hand out candy, 46.3% will carve a pumpkin, 20.8% will visit a haunted house, and 11.5% will dress up their pets.',
    'The Village Halloween parade in New York City is the largest Halloween parade in the United States. The parade includes 50,000 participants and draws over 2 million spectators.',
    'Comedian John Evans once quipped: “What do you get if you divide the circumference of a jack-o’-lantern by its diameter? Pumpkin π.”',
    'Boston, Massachusetts, holds the record for the most Jack O’Lanterns lit at once (30,128).',
    'Both Salem, Massachusetts, and Anoka, Minnesota, are the self-proclaimed Halloween capitals of the world.',
    'Halloween is thought to have originated around 4000 B.C., which means Halloween has been around for over 6,000 years.',
    'According to tradition, if a person wears his or her clothes inside out and then walks backwards on Halloween, he or she will see a witch at midnight.',
    'Fifty percent of kids prefer to receive chocolate candy for Halloween, compared with 24% who prefer non-chocolate candy and 10% who preferred gum',
    'Because the movie Halloween (1978) was on such a tight budget, they had to use the cheapest mask they could find for the character Michael Meyers, which turned out to be a William Shatner Star Trek mask. Shatner initially didn’t know the mask was in his likeness, but when he found out years later, he said he was honored.',
	'The phrase “trick or treat” had been firmly established in American popular culture by 1951, when trick-or-treating was depicted in the Peanuts comic strip.',
	'The largest pumpkin pie ever baked was in 2005 and weighed 2,020 pounds.',
	'Pumpkins have been grown in North America for five thousand years. They are indigenous to the western hemisphere.',
	'Pumpkins are low in calories, fat, and sodium and high in fiber. They are good sources of Vitamin A, Vitamin B, potassium, protein, and iron.',
	'Pumpkins are a member of the gourd family, which includes cucumbers, honeydew melons, cantaloupe, watermelons and zucchini.',
    'Orange and black are Halloween colors because orange is associated with the Fall harvest and black is associated with darkness and death.',
    'The tradition of wearing scary costumes on Halloween comes from the ancient Celts: back then, people believed dressing up as demons and the like would confuse or ward off the evil spirits who roamed the streets during Samhain (the pagan version of Halloween)',
    'Trick-or-treating harks back to the Middle Ages and All Souls’ Day, when poor people in Britain would beg for soul cakes, a sweet-bread treat, and pray for dead relatives in return.',
    'According to ancient Roman records, tribes located in today’s Germany and France traditionally wore costumes of animal heads and skins to connect to spirits of the dead.',
    'Christians, in an effort to convert pagans, changed Samhain in the 11th century to a three day celebration from October 31st to November 2nd. The first night of this holiday is called All Hallow’s Eve, which eventually became Halloween.',
    'The word “witch” actually comes from an old English word that means “wise woman”; members of the wiccan were once highly respected. It was popularly believed that witches held one of their two annual meetings, called sabbats, on Halloween.',
    'Owls are popular Halloween symbols. In medieval times, owls were believed to be witches, and if you heard the call of an owl it meant that someone was about to die.',
    'Bats were also feared as the familiars of witches. Bats have an additional connection to Halloween: the bonfires that the ancient Celts built to celebrate Samhain would often attract the flying mammals.',
    'During the celebrations associated with All Soul’s Day on November 2, poor people would knock on the doors of wealthy citizens and be given pastries as treats. Like guising, souling was a precursor to modern trick-or-treating.',
    'Legend has it that if you see a spider on Halloween night, it means a loved one is watching over you.',
    'In the 1940s, trick or treating was halted because war-time rationing had curtailed the use of sugar.',
    'Halloween celebrations in Hong Kong are known as Yue Lan or the “Festival of the Hungry Ghosts” during which fires are lit and food and gifts are offered to placate potentially angry ghosts who might be looking for revenge.',
    'Teng Chieh or the Lantern Festival is one Halloween festival in China. Lanterns shaped like dragons and other animals are hung around houses and streets to help guide the spirits back to their earthly homes',
    'Halloween was influenced by the ancient Roman festival Pomona, which celebrated the harvest goddess of the same name',
    'Dressing up as ghouls and other spooks originated from the ancient Celtic tradition of townspeople disguising themselves as demons and spirits',
    'Scarecrows, a popular Halloween fixture, symbolize the ancient agricultural roots of the holiday',
    'More than 175 million Americans will celebrate Halloween this year, with seven out of ten consumers planning to hand out candy.',
    'Fifty percent of kids prefer to receive chocolate candy for Halloween, compared with 24% who prefer non-chocolate candy and 10% who preferred gum.',
    'Most experts trace trick-or-treating to the European practice of \'mumming,\' or \'guysing,\' in which costume-wearing participants would go door-to-door performing choreographed dances, songs and plays in exchange for treats.',
    'Candy makers supposedly lobbied to extend daylight savings time into the beginning of November to get an extra hour of daylight so children could collect even more candy!',
    'Trick-or-treating harks back to the Middle Ages and All Souls’ Day, when poor people in Britain would beg for soul cakes, a sweet-bread treat, and pray for dead relatives in return.',
    'Chocolate makes up about three-quarters of a trick-or-treater’s loot, according to the National Confectioners Association.',
    'Immigrants from Ireland and Scotland brought Halloween to the United States in the 1800s. Haitian and African immigrants brought voodoo beliefs about black cats, fire, and witchcraft.',
    'According to Hallmark, Halloween is the sixth most popular card-giving holiday with 20 million cards sent each year.',
    'Children are more than twice as likely to be killed in a pedestrian/car accident on Halloween than on any other night.',
    'Pumpkin carving in bulk is a popular Guinness World Record. The proud Halloween enthusiasts of Highwood, Illinois took the record in 2011 with 30,919 simultaneously lit Jack-O-Lanterns.',
    'A full moon on Halloween is extremely rare.',
    'Hallowmass is another name for All Saint\'s Day, a Roman Catholic festival that honors the saints.  Hollow\'s eve is the day before Hallowmass.  This was shortened to Hallowe\'en and that is where the current name for this holiday originated.',
    'Studies have shown that Halloween actually makes kids act more evil!',
    'Many other countries celebrate the passing of dead spirits in late October and early November. On Mexico’s Day of the Dead, graveyards are flooded with people tidying relatives’ graves and bringing offerings of food, flowers and tequila. Some even stay to picnic and party.',
    'There\'s a $1,000 fine for using or selling Silly String in Hollywood on Halloween.',
    'Halloween is the second highest grossing commercial holiday after Christmas.',
    'A full moon on Halloween is extremely rare.',
    'October is the best month of the year',
    'Spooktober jokes are really fun',
    'A full moon on Halloween is extremely rare.',
    'Halloween was once a day of romance',
    'The Village Halloween Parade in New York City is the US\’s largest Halloween parade, involving 50,000 participants and over 2 million spectators.',
    'Some people want to see a ghost but it is not necessary that the ghost also wants to see you too. :D',
    'Halloween is the second highest grossing commercial holiday after Christmas.',
    'Many myths explain that spotting a spider on Halloween is actually a loved one watching over you!',
    'The UNICEF orange collection boxes are iconic in Canada, with Canadians continuing to donate on average $3 million every Halloween.',
    'On average, a licking machine designed by engineering students at Purdue needed 364 licks to reach the centre of a tootsie pop.',
    'In Brazil, the date of Halloween is called witch\`s day'
];

// Display message and fact
factElement.innerHTML = facts[Math.floor(Math.random() * facts.length)];

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

    return `There are only ${days} days until Halloween!`;
};

const today = moment().startOf('day'); // Today
const halloween = moment("31-10", "DD-MM"); // Next Halloween
const message = getMessage(halloween.diff(today, "days")); // Calculate difference

// Display message
spooky.innerHTML = `<div>${message} 👻🎃</div>
                    <div id="outerCostumeBox">
                    <button id="costumeButton">🦇</button>
                    <div id="costumeContent">Got a costume yet?
                     <br>Click on the bat for a random idea!</div>
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
    ["Napoleon Dynamite", "https://i.pinimg.com/originals/26/2a/f4/262af40e4592db053fd8613773e3f5b0.jpg"],
    ["Castaway", "https://www.pinterest.ca/pin/16958936081976494/"],
    ["a 404error", "https://www.instagram.com/p/7QsQ9Vhj9_/?utm_source=ig_embed"],
    ["50 Shades of Grey", "https://i.pinimg.com/474x/9a/45/42/9a454265d6a6e59ba609831a1b7c7028--so-funny-funny-stuff.jpg"],
    ["Octocat", "https://twitter.com/Bint_alBeatz/status/793178052494815233"],
    ["The Shining", "https://i.pinimg.com/originals/21/e3/a9/21e3a9859795366b7cc1b7aa3c8ed598.jpg"],
    ["Tamagotchi", "https://www.pinterest.ca/pin/192810427770341992/"],
    ["Clippy", "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F83%2F37%2F31%2F8337315668b57bcbf4fcb82a4fde2a99.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F518758450798995072%2F&docid=zgMyyDogGc7eJM&tbnid=Ex7IH-SdFvQoaM%3A&vet=10ahUKEwjXjKbr0_ndAhWL1FkKHZg5DfYQMwg7KAEwAQ..i&w=650&h=975&safe=off&client=firefox-b-ab&bih=781&biw=1440&q=halloween%20clippy&ved=0ahUKEwjXjKbr0_ndAhWL1FkKHZg5DfYQMwg7KAEwAQ&iact=mrc&uact=8"],
    ["Mark Zuckerberg", "https://costumewall.com/dress-like-mark-zuckerberg/"],
    ["a stick figure", "https://twitter.com/CarlForrest/status/1050448521353207808"],
  	["The Sims", "https://the-orbit.net/biodork/wp-content/uploads/sites/10/2013/07/SIMS-Cosplay.jpg"],
  	["Raven (Teen Titans)", "https://www.pinterest.co.uk/pin/549368854529441292"],
  	["Kiki (Kiki's Delivery Service", "https://www.pinterest.com/pin/1829656075790134"],
    ["Mike Myers", "https://lh6.googleusercontent.com/-9D6HisX7AQ0/T9Zoj01cyrI/AAAAAAAAAyM/p7gQaHoqRxg/s720/IMG_8023.jpg"],
    ["Jason Voorehees", "http://bestcostumedeal.com/assets/images/889071.jpg"],
    ["Scary Clown", "https://images.halloweencostumes.com/products/22473/1-1/deluxe-pennywise-costume.jpg"],
    ["Viking", "https://images.halloweencostumes.com/products/23028/1-1/mens-mighty-viking-costume.jpg"],
    ["Austin Powers", "https://images.halloweencostumes.com/products/2988/1-1/deluxe-austin-powers-costume.jpg"],
    ["Bounty Hunter", "https://www.popsugar.com/smart-living/photo-gallery/45420525/embed/45421772/Bounty-Hunter"],
    ["a stick figure", "https://twitter.com/CarlForrest/status/1050448521353207808"],
    ["a Selfie", "https://twitter.com/hellofelicia14/status/1055155960384290816"],
    ["Lana Del Ray", "https://twitter.com/delreyxmafia/status/1056652839097954305"],
    ["Oh yeah!", "https://www.pinterest.com/pin/271975264971863827/visual-search/?x=9&y=9&w=282&h=342"],
    ["Ruth Vader Ginsburg", "https://pbs.twimg.com/media/Dqn48iiX0AAOZKw.jpg"],
    ["Pickle Rick", "https://cdn-blog.adafruit.com/uploads/2017/08/Pickle-Rick-costume-360x480.jpg"],
    ["Ecce homo", "https://theheureka.com/wp-content/uploads/2012/10/3Ts6B.jpeg"],
    ["Blessing in Disguise", "https://www.instagram.com/p/BpcONbEAUnu/?hl=en"],
    ["Blue Screen of Death", "https://i.redd.it/gvq357z64iu11.jpg"],
    ["Happy Meal", "https://in.pinterest.com/pin/261208847122984969/"],
    ["Unicorn", "https://in.pinterest.com/pin/261208847116945784/"]
    ["Pumpkin Spiced Clown", "https://i.redd.it/sv7g8ajzxyr11.jpg"],
    ["Neo from The Matrix", "https://nextviewventures.com/wp-content/uploads/2014/07/control-content-marekting-for-startups.jpg"],
    ["Unicorn", "https://img.ltwebstatic.com/images/pi/201712/52/15133252867462243289_thumbnail_600x.webp"],
    ["Oscar Award", "https://www.pinterest.com/pin/281193570455380742/"],
    ["3 Hole Punch", "https://amazon.com/Jim-Hole-Punch-Costume-T-shirt/dp/B0763FDFGY?sa-no-redirect=1"],
    ["Shredded Girl with Balloon by Bansky", "https://twitter.com/WorldOfWard/status/1056284833327001600"],
    ["Iron Man", "https://costumeworld.co.nz/products/iron-man-adult-costume-top"],
    ["Arthur Read", "https://www.youtube.com/watch?v=BTU5FkLBxV4"],
    ["Ceiling Fan", "http://i.imgur.com/ZLjQ2.jpg"],
    ["Android", "https://www.geek.com/wp-content/uploads/2017/10/android-halloween-costume-e1508426401556.jpg"],
    ["Incredibles", "https://ae01.alicdn.com/kf/HTB1pKI0cYwrBKNjSZPcq6xpapXaW/NEW-ARRIVAL-Incredibles-2-Helen-Parr-Cosplay-Costume-Superhero-Elastigirl-Costume-Halloween-Outfit-Custom-Made.jpg_640x640.jpg"],
    ["Spider-Man", "https://images.halloweencostumes.com/products/46552/1-21/marvel-infinity-war-deluxe-iron-spider-kids-costume.jpg"],
    ["Avocado Toast", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screen-shot-2018-09-10-at-2-36-54-pm-1536604924.png?crop=0.798xw:0.802xh;0.105xw,0.154xh&resize=980:*"],
    ["Nerd", "https://downerclassic.com/wp-content/uploads/2018/09/30-genius-homemade-halloween-costumes-for-adults-and-kids-cool-diy-ideas-of-easy-homemade-halloween-costumes-for-adults-of-easy-homemade-halloween-costumes-for-adults.jpg"],
    ["One Night Stand", "http://freshxmas.com/wp-content/uploads/2018/09/homemade-halloween-costume-ideas-for-men-best-costumes-disguises-images-on-pinterest-stylish.jpg"],
    ["Identity Theft", "https://i.imgur.com/9DF2KI9.jpg"],
    ["Slack notification", "https://twitter.com/aengelbro/status/1057659128707829760"],
    ["Ultimate Mech-Daddy-Daughter","https://www.youtube.com/watch?v=rCpMaoVx4uY&ab_channel=GriddlockCosplay"],
    ["The Cloud", "https://www.instagram.com/p/u1WzDEBzZj/?utm_source=ig_embed"],
    ["Captain America", "https://static1.funidelia.com/26530-f4_big/costume-da-capitan-america-soldato-dinverno-classico-retro-da-bambino.jpg"]
];

//Assign DOM elements
let costumeButton = document.getElementById("costumeButton");
let costumeContent = document.getElementById("costumeContent");
let factButton = document.getElementById("factButton");

//Pick a random costume
const costumeIs = () => {
    let numCostumes = costumes.length;
    let randomNumber = Math.floor((Math.random() * numCostumes));
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

//display fact
const displayFact = () => {
    factElement.innerHTML = facts[Math.floor(Math.random() * facts.length)];
};

  //add event listener for fact
  factButton.addEventListener('click', displayFact, alse);
