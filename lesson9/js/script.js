function toggleMenu() {
    var temp = document.getElementsByClassName("toggler")[0]
    temp.classList.toggle("hide")
    if (temp.classList[1] == "hide") {
        document.querySelector(".toggler > a").innerHTML = "&#9748; Menu"
    } else {
        document.querySelector(".toggler > a").innerHTML = "&#10060; Close"
    }
}
if (new Date().getDay() == 5) {
    document.getElementById("banner").style.display = "grid"
}

function closeBanner() {
    document.getElementById("banner").style.display = "none"
}



getTownData();
async function getTownData() {
    const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
    const responseJSON = await (await fetch(requestURL)).json();

    const towns = responseJSON['towns'];
    towns.forEach(element => {
        if (element.name === 'Soda Springs' || element.name === 'Fish Haven' || element.name === 'Preston') {
            let card = document.createElement('section');
            card.classList.add('towns');
            let div = document.createElement('div');
            let h2 = document.createElement('h2');
            let span1 = document.createElement('span');
            let span2 = document.createElement('span');
            let span3 = document.createElement('span');
            let span4 = document.createElement('span');
            let image = document.createElement('img');
            let imageLocation = element.photo;

            h2.textContent = element.name;
            span1.textContent =  element.motto;
            span2.textContent =  `Year Founded ${element.yearFounded}`;
            span3.textContent = `Population ${element.currentPopulation}`;
            span4.textContent = `Average Rain Fall ${element.averageRainfall}`;
            image.setAttribute('src', `images/${imageLocation}`);

            div.appendChild(h2);
            div.appendChild(span1);
            div.appendChild(span2);
            div.appendChild(span3);
            div.appendChild(span4);
            card.appendChild(image);

            document.querySelector('div.town-info').appendChild(card).appendChild(div);
        }
    })
}