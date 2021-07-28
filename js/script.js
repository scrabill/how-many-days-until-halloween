window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");

  const date = document.querySelector("#date");
  const title = document.querySelector("title");
  const h1 = document.querySelector("h1");

  const now = new Date();
  let year = now.getFullYear();

  if (now.getMonth() > 9) {
    year += 1;
  }

  const halloween = new Date(`October 31, ${year} 00:00:00`);
  const timeUntil = halloween.getTime() - now.getTime();
  const daysUntil = Math.abs(Math.ceil(timeUntil / (1000 * 60 * 60 * 24)));

  switch (daysUntil) {
    case 1:
      h1.innerHTML = `Halloween is <span id="date">${daysUntil}</span> day away!`;
      title.innerHTML = `${daysUntil} Day Until Halloween!`;
      break;
    case 0:
      h1.innerHTML = `<span id="date">Today is Halloween!</span> Eat, drink and be scary!`;
      title.innerHTML = "Ahhhh! Today is Halloween!";
      break;
    default:
      date.innerHTML = daysUntil;
      title.innerHTML = `${daysUntil} Days Until Halloween!`;
      break;
  }

  document.documentElement.setAttribute("data-theme", "dark");

  var themeSwitcher = document.getElementById("theme-switcher");

  themeSwitcher.onclick = function () {
    var currentTheme = document.documentElement.getAttribute("data-theme");

    var switchToTheme = currentTheme === "dark" ? "light" : "dark";

    themeSwitcher.innerHTML = switchToTheme === "dark" ? "🌞" : "🎃";

    document.documentElement.setAttribute("data-theme", switchToTheme);
  };
});
