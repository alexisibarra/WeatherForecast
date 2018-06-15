const api_key = "0f4d249845c66f2ec8374d424a71b341";
const url = "http://api.openweathermap.org/data/2.5/";

const weatherByCityURL = city => `${url}weather?q=${city}&appid=${api_key}`;
const forecastURL = city => `${url}forecast?q=${city}&appid=${api_key}`;

export const getWeatherByCity = city => fetch(weatherByCityURL(city));
export const getForecast5 = city => fetch(forecastURL(city));
