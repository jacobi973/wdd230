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
    rootMargin: "0px 0px -150px 0px"
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
