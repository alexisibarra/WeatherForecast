import React from "react";
import WeatherIcons from "react-weathericons";
import PropTypes from "prop-types";

const WeatherTemperature = ({ temperature, weatherState }) => {
  return (
    <div className="weatherTemperatureCont">
      <WeatherIcons className="wicon" name={weatherState} />
      <span className="temperature">{`${temperature}`}</span>
      <span className="temperatureType">{`C`}</span>
    </div>
  );
};

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired
};
export default WeatherTemperature;
