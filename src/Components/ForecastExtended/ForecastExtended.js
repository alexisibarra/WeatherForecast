import React, { Component } from "react";
import PropTypes from "prop-types";

import "./styles.css";
import { getForecast5 } from "../../Services/api";
import { transformForecast } from "../../Services/transform";
import ForecastItem from "../ForecastItem/ForecastItem";

class ForecastExtended extends Component {
  state = {
    forecastData: null
  };

  renderForecastItemDays(forecastData) {
    return forecastData.map(forecast => {
      const { weekDay, hour, data } = forecast;
      return (
        <ForecastItem
          key={`${weekDay}${hour}`}
          weekDay={weekDay}
          hour={hour}
          data={data}
        />
      );
    });
  }
  renderProgress() {
    return <h3>Cargando pronóstico extendido...</h3>;
  }

  componentWillReceiveProps(nextProps) {
    const { city } = nextProps;

    getForecast5(city)
      .then(data => data.json())
      .then(weather_data => {
        const forecastData = transformForecast(weather_data);
        this.setState({ forecastData });
      })
      .catch(err => {
        console.log("error: ", err);
      });
  }

  render() {
    const { city } = this.props;
    const { forecastData } = this.state;

    return (
      <div>
        {
          <div className="detail">
            <h1>{!!city ? city : "No se ha seleccionado ciudad"}</h1>
            {forecastData
              ? this.renderForecastItemDays(forecastData)
              : city
                ? this.renderProgress()
                : null}
          </div>
        }
      </div>
    );
  }
}

ForecastExtended.propTypes = { city: PropTypes.string.isRequired };

export default ForecastExtended;
