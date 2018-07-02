import { getForecast5, getWeatherByCity } from "../Services/api";
import { transformForecast, transformWeather } from "../Services/transform";

export const SET_CITY = "SET_CITY";
export const SET_FORECAST_DATA = "SET_FORECAST_DATA";
export const SET_WEATHER = "SET_WEATHER";
export const SET_WEATHER_CITY = "SET_WEATHER_CITY";
export const GET_WEATHER_CITY = "GET_WEATHER_CITY";

const getWeatherCity = payload => ({ type: GET_WEATHER_CITY, payload });
const setWeatherCity = payload => ({ type: SET_WEATHER_CITY, payload });

export const setCity = payload => ({ type: SET_CITY, payload });
export const setForecastData = payload => ({
  type: SET_FORECAST_DATA,
  payload
});
export const setSelectedCity = payload => dispatch => {
  dispatch(setCity(payload));

  getForecast5(payload)
    .then(data => data.json())
    .then(weather_data => {
      const forecastData = transformForecast(weather_data);

      dispatch(setForecastData({ city: payload, forecastData }));
    })
    .catch(err => {
      console.log("error: ", err);
    });
};
export const setWeather = payload => {
  return dispatch => {
    payload.map(city => {
      dispatch(getWeatherCity(city));

      return getWeatherByCity(city)
        .then(data => data.json())
        .then(weather_data => {
          const weather = transformWeather(weather_data);
          dispatch(setWeatherCity({ city, weather }));
        })
        .catch(err => {
          console.log("error: ", err);
        });
    });
  };
};
