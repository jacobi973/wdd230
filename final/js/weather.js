const weatherapiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=43.6228&lon=-116.3092&units=imperial&appid=2b4567babc5e953d167e263b7e019f04';

fetch(weatherapiURL).then((response) => response.json()).then((responseJson) => {
    
    const temperature = document.querySelector('.temperature');
    temperature.textContent = Math.round(responseJson.current.temp);

    const condition = document.querySelector('.currently');
    condition.textContent = responseJson.current.weather[0].description;

    const humidity = document.querySelector('.humidity');
    humidity.textContent = responseJson.current.humidity;

    Object.keys(responseJson.daily).forEach(i => {
        if (i < 3) {   
        let dailyForecast = new Date(responseJson.daily[i].dt * 1000);

        let dailyForecastClass = document.createElement('div');
        dailyForecastClass.classList.add('dailyForecastClass');

        let day = document.createElement('span');
        day.classList.add('day');
        day.textContent = dailyForecast.toLocaleString("default", {weekday: "long"});
        dailyForecastClass.appendChild(day);

        let weather_info_div = document.createElement('div');
        weather_info_div.classList.add('weather-info');
        dailyForecastClass.appendChild(weather_info_div);

        let img = document.createElement('img');
        img.setAttribute("src", 'https://openweathermap.org/img/w/' + responseJson.daily[i].weather[0].icon + '.png');

        img.setAttribute("alt", `Icon depicting ${responseJson.daily[i].weather[0].description} in Boise, Idaho`);
        img.setAttribute('loading', 'lazy');
        weather_info_div.appendChild(img);

        let data_span = document.createElement('span');
        data_span.classList.add('data');
        data_span.innerHTML = `${Math.round(responseJson.daily[i].temp.day)}&#176;F`;
        weather_info_div.appendChild(data_span);            

        document.querySelector('div.weather-forecast').appendChild(dailyForecastClass);
        }
    });
});