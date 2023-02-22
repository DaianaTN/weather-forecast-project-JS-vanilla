const bucharest = document.querySelector(".dropdown-menu .bucharest");
const timisoara = document.querySelector(".dropdown-menu .timisoara");
const oradea = document.querySelector(".dropdown-menu .oradea");
const currentCity = document.querySelector(".current-city");

const handleCityCLick = city => {
  currentCity.innerHTML = city;
  displayCurrentWeather(city);
  displayWeatherForecast(city);

  localStorage.setItem("city", city);
};

bucharest.addEventListener("click", () => {
  handleCityCLick("București");
});

timisoara.addEventListener("click", () => {
  handleCityCLick("Timisoara");
});

oradea.addEventListener("click", () => {
  handleCityCLick("Oradea");
});
