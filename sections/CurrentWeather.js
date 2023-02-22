const displayCurrentWeather = city => {
  const endpoint = getCurrentWeatherEndpoint(city);

  fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      const { name, dt, main, weather, wind } = data; //object destructuring
      const temp = Math.round(main.temp); //sa se afiseze valoarea rotunjita, fara virgula

      const day = getDayOfWeek(dt); //am declarat functia in fisierul date.js
      const hour = getHour(dt); //am declarat functia in fisierul date.js
      const realFeel = Math.round(main.feels_like);
      const description = weather[0].description;
      const windSpeed = Math.round(windToKmPerHour(wind.speed)); //functia din weather.js

      //pentru a obtine imaginea pt vreme
      const icon = getWeatherIcon(weather[0].icon); //folosim funtia getWeatherIcon dn wether.js

      const currentWeatherContainer =
        document.querySelector(".current-weather");
      currentWeatherContainer.innerHTML = /*html*/ `
              <div class="px-3">
                <div class="fs-2 md-2"><strong>${name}</strong></div>
                <div class="fs-4">
                  <strong>${day} 
                  </strong> ${hour}</div>
                <div class="d-flex align-items-center">
                  <strong class="fs-1">${temp}°C</strong>
                  <img src="${icon}" />
                </div>
              </div>

              <div class="px-3">
                <p class="fs-5">Real feel: <strong>${realFeel}°C</strong></p>
                <p class="fs-5 text-capitalize">${description}</p>
                <p class="fs-5">Vant: <strong>${windSpeed} km/h</strong></p>
              </div>
              `;
    });
};
