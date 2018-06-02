import convert from "convert-units";
import { SUN } from "../Constants/weathers";

const getWeatherState = weather_data => {
  return SUN;
};

const transformTemperature = kelvinTemp =>
  Number(
    convert(kelvinTemp)
      .from("K")
      .to("C")
      .toFixed(2)
  );

const transformWeather = weather_data => {
  const {
    main: { humidity, temp },
    wind: { speed }
  } = weather_data;

  return {
    humidity,
    temperature: transformTemperature(temp),
    weatherState: getWeatherState(weather_data),
    wind: `${speed} m/s`
  };
};

export default transformWeather;
