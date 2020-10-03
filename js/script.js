window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    const date = document.querySelector("#date")

    const now = new Date()
    const halloween = new Date(`October 31, ${now.getFullYear()} 00:00:00`)
    const timeUntil = halloween.getTime() - now.getTime()
    const daysUntil = Math.abs(Math.ceil(timeUntil / (1000 * 60 * 60 * 24)))

    date.innerHTML = daysUntil

});