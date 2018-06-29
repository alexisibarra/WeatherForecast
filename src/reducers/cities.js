import { SET_FORECAST_DATA } from "../actions/actions";

export const cities = (state = {}, action) => {
  switch (action.type) {
    case SET_FORECAST_DATA:
      const { city, forecastData } = action.payload;
      return { ...state, [city]: { forecastData } };
    default:
      return state;
  }
};

export const getForecastDataFromCities = state => {
  const { cities, city } = state;
  return cities[city] && cities[city].forecastData;
};
