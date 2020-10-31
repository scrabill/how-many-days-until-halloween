window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    const date = document.querySelector("#date")
    const title = document.querySelector("title")
    const h1 = document.querySelector("h1")

    const now = new Date()
    const halloween = new Date(`October 31, ${now.getFullYear()} 00:00:00`)
    const timeUntil = halloween.getTime() - now.getTime()
    // const daysUntil = Math.abs(Math.ceil(timeUntil / (1000 * 60 * 60 * 24)))
    const daysUntil = 0

    if (daysUntil == 0) {
        h1.innerHTML = "Today is Halloween! Eat, drink and be scary!"
        title.innerHTML = "Ahhhh! Today is Halloween!"
    } else {
        date.innerHTML = daysUntil
        title.innerHTML = `${daysUntil} Days Until Halloween!`
    }


});