import React from "react";
import WeatherLocation from "../WeatherLocation/WeatherLocation";
import PropTypes from "prop-types";
import "./styles.css";

const LocationList = ({ cities, onSelectedLocation }) => {
  const handleWeatherLocationClick = city => {
    onSelectedLocation(city);
  };

  const citiesToComponent = cities => {
    return cities.map(city => {
      return (
        <WeatherLocation
          key={city.key}
          city={city.name}
          onWeatherLocationClick={() => handleWeatherLocationClick(city.name)}
          data={city.data}
        />
      );
    });
  };

  return <div className="LocationList">{citiesToComponent(cities)}</div>;
};

LocationList.propTypes = {
  cities: PropTypes.array,
  onSelectedLocation: PropTypes.func
};

export default LocationList;
