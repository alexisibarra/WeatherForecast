import React from "react";
import PropTypes from "prop-types";

import "./styles.css";
import ForecastItem from "../ForecastItem/ForecastItem";

const renderForecastItemDays = forecastData => {
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
};

const renderProgress = () => {
  return <h3>Cargando pronóstico extendido...</h3>;
};
const ForecastExtended = ({ city, forecastData }) => (
  <div>
    {
      <div className="detail">
        <h1>{!!city ? city : "No se ha seleccionado ciudad"}</h1>
        {forecastData
          ? renderForecastItemDays(forecastData)
          : city
            ? renderProgress()
            : null}
      </div>
    }
  </div>
);

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.array
};

export default ForecastExtended;
