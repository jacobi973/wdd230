const t = parseFloat(document.querySelector(".temperature").innerHTML)
const s = parseFloat(document.querySelector(".wind-speed").innerHTML)
const chillFactor = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s,0.16)) + (0.4275 * t * Math.pow(s,0.16))
if (t <= 50.0 && s > 3.0) {
    document.querySelector(".wind-chill").innerHTML = Math.ceil(chillFactor)
}
else {
    document.querySelector(".wind-chill").innerHTML = "N/A"
}