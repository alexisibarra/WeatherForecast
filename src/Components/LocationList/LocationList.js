import React from "react";
import WeatherLocation from "../WeatherLocation/WeatherLocation";
import PropTypes from "prop-types";
import "./styles.css";

const LocationList = ({ cities, onSelectedLocation }) => {
  const handleWeatherLocationClick = city => {
    onSelectedLocation(city);
  };

  const citiesToComponent = cities => {
    return cities.map(({ key, name, data }) => (
      <WeatherLocation
        key={key}
        city={name}
        onWeatherLocationClick={() => handleWeatherLocationClick(name)}
        data={data}
      />
    ));
  };

  return <div className="LocationList">{citiesToComponent(cities)}</div>;
};

LocationList.propTypes = {
  cities: PropTypes.array,
  onSelectedLocation: PropTypes.func
};

export default LocationList;
