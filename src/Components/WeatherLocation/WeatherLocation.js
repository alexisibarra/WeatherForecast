import React, { Component } from "react";
import PropTypes from "prop-types";
import { CircularProgress, Paper } from "@material-ui/core";

import Location from "./Location/Location";
import WeatherData from "./WeatherData/WeatherData";
import { transformWeather } from "../../Services/transform";
import "./styles.css";
import { getWeatherByCity } from "../../Services/api";

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

    getWeatherByCity(city)
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
