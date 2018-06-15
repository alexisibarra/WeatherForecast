import React from "react";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";

import WeatherData from "../WeatherLocation/WeatherData/WeatherData";
import "./styles.css";

const ForecastItem = ({ weekDay, hour, data }) => {
  return (
    <Paper elevation={4} className="forecastItem">
      <h3>{`${weekDay} ${hour} hs`}</h3>
      <WeatherData data={data} />
    </Paper>
  );
};

ForecastItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
  hour: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
};

export default ForecastItem;
