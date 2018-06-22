import React, { Component } from "react";
import PropTypes from "prop-types";

import "./styles.css";
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

  componentWillMount() {
    // this.getForecast(this.props.city);
  }

  componentWillReceiveProps(nextProps) {
    const { city } = nextProps;
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
