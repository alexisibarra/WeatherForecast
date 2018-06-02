import React, { Component } from "react";

import Location from "./Location/Location";
import WeatherData from "./WeatherData/WeatherData";
import transformWeather from "../../Services/transformWeather";
import "./styles.css";

const location = "Buenos Aires,AR";
const api_key = "0f4d249845c66f2ec8374d424a71b341";
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;

class WeatherLocation extends Component {
  state = {
    city: "Buenos Aires"
  };

  getWeatherInfo = () =>
    fetch(api_weather)
      .then(data => data.json())
      .then(weather_data => {
        const data = transformWeather(weather_data);
        this.setState({ data });
      })
      .catch(err => {
        console.log("error: ", err);
      });

  componentWillMount() {
    this.getWeatherInfo();
  }

  render() {
    const { city, data } = this.state;

    return (
      <div className="WeatherLocationCont">
        <Location location={city} />
        {data ? <WeatherData data={data} /> : null}
      </div>
    );
  }
}

export default WeatherLocation;
