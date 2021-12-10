function toggleMenu() {
    var temp = document.getElementsByClassName("toggler")[0]
    temp.classList.toggle("hide")
    if (temp.classList[1] == "hide") {
        document.querySelector(".toggler > a").innerHTML = "&#9748; Menu"
    } else {
        document.querySelector(".toggler > a").innerHTML = "&#10060; Close"
    }
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
            let imageLocation = element.photo.replace('.jpg', '.webp');

            h2.textContent = element.name;
            span1.textContent = element.motto;
            span2.textContent = `Year Founded ${element.yearFounded}`;
            span3.textContent = `Population ${element.currentPopulation}`;
            span4.textContent = `Average Rain Fall ${element.averageRainfall}`;
            image.setAttribute('src', `images/${imageLocation}`);
            image.setAttribute("alt", `${element.name}, image`);

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



const d = new Date();
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date().getDay()
for (let i = 0; i < 3; i++) {
    if (d.getDay() + i > 6) {
        document.getElementById(`day${i + 1}`).textContent = weekdays[0];
    } else {
        document.getElementById(`day${i + 1}`).textContent = weekdays[d.getDay() + i];
    }

}

const api_key = "2b4567babc5e953d167e263b7e019f04";
const cityId = 5604473;

// fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=imperial&appid=${api_key}`)
//     .then(res => {
//         return res.json()
//     })
//     .then(jsonData => {
//         document.querySelector('.summary .currently').innerHTML = jsonData.weather[0].main + '<span>' + Math.round(jsonData.main.temp, 1) + '</span>&deg;F';
//         document.querySelector('.summary .temperature').textContent = Math.round(jsonData.main.temp_max);
//         document.querySelector('.summary .humidity').textContent = jsonData.main.humidity + '%';
//         document.querySelector('.summary .wind-speed').textContent = jsonData.wind.speed;

//         let t = parseFloat(document.querySelector('.currently span').innerHTML);
//         let s = parseFloat(document.querySelector('.wind-speed').innerHTML);
//         let chillFactor = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
//         if (t <= 50.0 && s > 3.0) {
//             document.querySelector('.wind-chill').innerHTML = Math.round(chillFactor, 1);
//         } else {
//             document.querySelector('.wind-chill').innerHTML = 'N/A';
//         }
//     })

// fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=imperial&appid=${api_key}`)
//     .then(res => {
//         return res.json();
//     })
//     .then(jsonData => {
//         jsonData.list.filter(item => item['dt_txt'].includes('18:00:00'))
//         .forEach((elem, index) => {
//             document.querySelector('#weather-icon' + (index + 1))
//                 .innerHTML = '<img src=\'' + 'https://openweathermap.org/img/w/' + elem.weather[0].icon + '.png\'>';
//             document.querySelector('#temp' + (index + 1))
//                 .innerHTML = Math.round(elem.main.temp, 1) + '&deg;F';
//         })
//     })


// Weather Data
//#region Weather API
// const weatherapiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=43.6228&lon=-116.3092&units=imperial&appid=c3affef608fbd43350f108a8f72cddac';

// fetch(weatherapiURL).then((response) => response.json()).then((jsonObject) => {

//     const temperature = document.querySelector('.temperature');
//     temperature.textContent = Math.round(jsonObject.current.temp);

//     const condition = document.querySelector('.condition');
//     condition.textContent = jsonObject.current.weather[0].description;

//     const humidity = document.querySelector('.humidity');
//     humidity.textContent = jsonObject.current.humidity;

//     //#region Forecast   
//     Object.keys(jsonObject.daily).slice(0,3).forEach(i => {
//         let forecastdate = new Date(jsonObject.daily[i].dt * 1000);

//         let flexcol = document.createElement('div');
//         flexcol.classList.add('flex-col');

//         let col_head_span = document.createElement('span');
//         col_head_span.classList.add('col-head');
//         col_head_span.textContent = forecastdate.toLocaleString("default", {weekday: "short"});
//         flexcol.appendChild(col_head_span);

//         let weather_info_div = document.createElement('div');
//         weather_info_div.classList.add('weather-info');
//         flexcol.appendChild(weather_info_div);

//         let img = document.createElement('img');
//         img.setAttribute("src", `images/${jsonObject.daily[i].weather[0].icon}.png`);
//         img.setAttribute("alt", `Icon depicting ${jsonObject.daily[i].weather[0].description} in Boise, Idaho`);
//         img.setAttribute('loading', 'lazy');
//         weather_info_div.appendChild(img);

//         let data_span = document.createElement('span');
//         data_span.classList.add('data');
//         data_span.innerHTML = `${Math.round(jsonObject.daily[i].temp.day)}&#176;F`;
//         weather_info_div.appendChild(data_span);            

//         document.querySelector('div.flex').appendChild(flexcol);
//     });
//     //#endregion

//     //#region Weather Alerts
//     if (jsonObject.alerts) {
//         Object.keys(jsonObject.alerts).forEach(i => {
//             let banner = document.createElement('div');
//             banner.classList.add('weather-alert');

//             let button = document.createElement('button');
//             button.setAttribute('type', 'button');
//             button.innerHTML = "&times;";
//             button.classList.add('close-button');
//             button.addEventListener("click", () => {
//                 banner.remove('weather-alert');
//             })

//             let title = document.createElement('h2');
//             title.textContent = jsonObject.alerts[i].event;

//             let description = document.createElement('p');
//             description.textContent = jsonObject.alerts[i].description;

//             title.addEventListener("onmouseover", () => {
//                 if (description.style.display === "none") {
//                     description.style.display = "block";
//                 }
//             })

//             title.addEventListener("onmouseout", () => {
//                 if (description.style.display === "block") {
//                     description.style.display = "none";
//                 }
//             })

//             banner.appendChild(title);
//             banner.appendChild(button);
//             banner.appendChild(description);

//             const body = document.querySelector('body');
//             body.prepend(banner);
//         });
//     } else {
//         bannerClass = document.querySelector('weather-alert');
//         if (bannerClass) {
//             banner.remove('weather-alert');
//         }
//     }
//     //#endregion
// });
//#endregion

// SlideShow
var slideIndex = 1;
var timer = null;
showSlides(slideIndex);

function plusSlides(n) {
  clearTimeout(timer);
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  clearTimeout(timer);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n==undefined){n = ++slideIndex}
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  timer = setTimeout(showSlides, 5000);
} 