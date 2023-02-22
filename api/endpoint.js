// functii de apel catre APIs
const API_KEY = "45dc27394499a52962550f7352737ea3";

const BASE_API_URL = "https://api.openweathermap.org/data/2.5";
//functia trebuie sa modifice doar orasul
//APIs key NU trebuie sa fie publice in DOM si de obicei se salveaza pe fisiere .env (nu in fisiere JS) pt ca ar putea contine date sensibile

const getCurrentWeatherEndpoint = city => {
  return `${BASE_API_URL}/weather?q=${city}&appid=${API_KEY}&lang=ro&units=metric`;
};

const getForecastEndpoint = city => {
  return `${BASE_API_URL}/forecast?q=${city}&appid=${API_KEY}&lang=ro&units=metric`;
};
