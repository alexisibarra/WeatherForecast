import convert from "convert-units";
import moment from "moment";
import "moment/locale/es";
import {
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  THUNDER,
  DRIZZLE
} from "../Constants/weathers";

const getWeatherState = weather => {
  const { id } = weather[0];

  if (id < 300) {
    return THUNDER;
  } else if (id < 400) {
    return DRIZZLE;
  } else if (id < 600) {
    return RAIN;
  } else if (id < 700) {
    return SNOW;
  } else if (id === 800) {
    return SUN;
  } else {
    return CLOUDY;
  }
};

const transformTemperature = kelvinTemp =>
  Number(
    convert(kelvinTemp)
      .from("K")
      .to("C")
      .toFixed(2)
  );

export const transformWeather = weather_data => {
  const {
    main: { humidity, temp },
    weather,
    wind: { speed }
  } = weather_data;

  return {
    humidity,
    temperature: transformTemperature(temp),
    weatherState: getWeatherState(weather),
    wind: `${speed} m/s`
  };
};

export const transformForecast = weather_data => {
  const { list } = weather_data;

  return list
    .filter(item => {
      const hour = moment
        .unix(item.dt)
        .utc()
        .hour();

      return hour === 6 || hour === 12 || hour === 18;
    })
    .map(item => ({
      weekDay: moment.unix(item.dt).format("ddd"),
      hour: moment
        .unix(item.dt)
        .utc()
        .hour(),
      data: transformWeather(item)
    }));
};
