function toggleMenu() {
    var temp = document.getElementsByClassName("toggler")[0]
    temp.classList.toggle("hide")
    if (temp.classList[1]=="hide") {
        document.querySelector(".toggler > a").innerHTML = "&#9748; Menu"
    }
    else {
        document.querySelector(".toggler > a").innerHTML = "&#10060; Close"
    }
}
if (new Date().getDay() == 5) {
    document.getElementById("banner").style.display = "grid"
}

function closeBanner() {
    document.getElementById("banner").style.display = "none"
}
