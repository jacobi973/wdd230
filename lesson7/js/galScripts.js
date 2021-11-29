const images = document.querySelectorAll("[data-src]")

function preLoadImage(img) {
    const src = img.getAttribute("data-src")
    if (!src) {
        return;
    }

    img.src = src;
};


const options = {
    threshold: 0,
    rootMargin: "0px 0px -200px 0px"
}

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preLoadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    });
}, options);

images.forEach(image => {
    imgObserver.observe(image)
});

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
