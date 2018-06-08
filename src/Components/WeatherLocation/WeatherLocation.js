import React, { Component } from "react";
import PropTypes from "prop-types";
import { CircularProgress, Paper } from "@material-ui/core";

import Location from "./Location/Location";
import WeatherData from "./WeatherData/WeatherData";
import transformWeather from "../../Services/transformWeather";
import "./styles.css";

const api_key = "0f4d249845c66f2ec8374d424a71b341";
const url = "http://api.openweathermap.org/data/2.5/weather";

class WeatherLocation extends Component {
  constructor({ city }) {
    super();
    this.state = {
      city,
      data: null
    };
  }

  getWeatherInfo = () => {
    const { city } = this.state;
    const api_weather = `${url}?q=${city}&appid=${api_key}`;

    fetch(api_weather)
      .then(data => data.json())
      .then(weather_data => {
        const data = transformWeather(weather_data);
        this.setState({ data });
      })
      .catch(err => {
        console.log("error: ", err);
      });
  };

  componentWillMount() {
    this.getWeatherInfo();
  }

  render() {
    const { onWeatherLocationClick } = this.props;
    const { city, data } = this.state;

    return (
      <div className="WeatherLocationCont" onClick={onWeatherLocationClick}>
        <Paper elevation={4}>
          <Location location={city} />
          {data ? <WeatherData data={data} /> : <CircularProgress size={50} />}
        </Paper>
      </div>
    );
  }
}

WeatherLocation.propTypes = {
  city: PropTypes.string,
  onWeatherLocationClick: PropTypes.func
};

export default WeatherLocation;
