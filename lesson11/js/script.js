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

const d = new Date();

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var today = new Date().getDay()
for (let i = 0; i < 5; i++) {
    if (d.getDay() + i > 6) {
        document.getElementById(`day${i + 1}`).textContent = weekday[0];
    } else {
        document.getElementById(`day${i + 1}`).textContent = weekday[d.getDay() + i];
    }

}

const api_key = "2b4567babc5e953d167e263b7e019f04";

async function getTownWeather(cityId) {

    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=imperial&appid=${api_key}`)
        .then(res => {
            return res.json()
        })
        .then(jsonData => {
            document.querySelector('.summary .currently').innerHTML = jsonData.weather[0].main + '<span>' + Math.round(jsonData.main.temp, 1) + '</span>&deg;F';
            document.querySelector('.summary .temperature').textContent = Math.round(jsonData.main.temp_max);
            document.querySelector('.summary .humidity').textContent = jsonData.main.humidity + '%';
            document.querySelector('.summary .wind-speed').textContent = jsonData.wind.speed;

            let t = parseFloat(document.querySelector('.currently span').innerHTML);
            let s = parseFloat(document.querySelector('.wind-speed').innerHTML);
            let chillFactor = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
            if (t <= 50.0 && s > 3.0) {
                document.querySelector('.wind-chill').innerHTML = Math.round(chillFactor, 1);
            } else {
                document.querySelector('.wind-chill').innerHTML = 'N/A';
            }
        })

    fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=imperial&appid=${api_key}`)
        .then(res => {
            return res.json();
        })
        .then(jsonData => {
            jsonData.list.filter(item => item['dt_txt'].includes('18:00:00'))
                .forEach((elem, index) => {
                    document.querySelector('#weather-icon' + (index + 1))
                        .innerHTML = '<img src=\'' + 'https://openweathermap.org/img/w/' + elem.weather[0].icon + '.png\'>';
                    document.querySelector('#temp' + (index + 1))
                        .innerHTML = Math.round(elem.main.temp, 1) + '&deg;F';
                })
        })

}

async function getTownEvents(townName){
    const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
    const responseJSON = await (await fetch(requestURL)).json();

    const towns = responseJSON['towns'];
    towns.forEach(element => {
        if (element.name === townName) {
            let card = document.createElement('section');
            card.classList.add('townEvents');
            let div = document.createElement('div');
            let h2 = document.createElement('h2');
            let span1 = document.createElement('span');
            let span2 = document.createElement('span');
            let span3 = document.createElement('span');

            h2.textContent = 'Upcoming Events';
            span1.textContent = element.events[0];
            span2.textContent = element.events[1];
            span3.textContent = element.events[2];

            div.appendChild(h2);
            div.appendChild(span1);
            div.appendChild(span2);
            div.appendChild(span3);

            document.querySelector('section.events').appendChild(card).appendChild(div);
        }
    })

}