import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";

import WeatherData from "../WeatherLocation/WeatherData/WeatherData";
import "./styles.css";

class ForecastItem extends Component {
  render() {
    return (
      <Paper elevation={4} className="forecastItem">
        <h3>{`${this.props.weekDay} ${this.props.hour} hs`}</h3>
        <WeatherData data={this.props.data} />
      </Paper>
    );
  }
}

export default ForecastItem;
