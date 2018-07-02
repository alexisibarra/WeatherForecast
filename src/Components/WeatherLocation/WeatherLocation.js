import React from "react";
import PropTypes from "prop-types";
import { CircularProgress, Paper } from "@material-ui/core";

import Location from "./Location/Location";
import WeatherData from "./WeatherData/WeatherData";
import "./styles.css";

const WeatherLocation = ({ onWeatherLocationClick, city, data }) => (
  <div className="WeatherLocationCont" onClick={onWeatherLocationClick}>
    <Paper elevation={4}>
      <Location location={city} />
      {data ? <WeatherData data={data} /> : <CircularProgress size={50} />}
    </Paper>
  </div>
);

WeatherLocation.propTypes = {
  city: PropTypes.string,
  onWeatherLocationClick: PropTypes.func,
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
  })
};

export default WeatherLocation;
