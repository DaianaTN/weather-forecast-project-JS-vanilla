// fisier de centralizare al functiilor

let currentCityTag = document.querySelector(".current-city");
let currentCity2 = localStorage.getItem("city");

if (!currentCity2) {
  localStorage.setItem("city", "Oradea");
  currentCity2 = "Oradea";
}

currentCityTag.innerHTML = currentCity2;

displayCurrentWeather(currentCity2);
displayWeatherForecast(currentCity2);
