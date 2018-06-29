import { getForecast5 } from "../Services/api";
import { transformForecast } from "../Services/transform";

export const SET_CITY = "SET_CITY";
export const SET_FORECAST_DATA = "SET_FORECAST_DATA";

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
