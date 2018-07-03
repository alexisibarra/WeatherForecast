import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setSelectedCity, setWeather } from "../actions/actions";
import { getWeatherCities, getCity } from "../reducers/reducers";

import LocationList from "../Components/LocationList/LocationList";

class LocationListContainer extends Component {
  componentDidMount() {
    const { setWeather, cities, setSelectedCity, city } = this.props;

    setWeather(cities);
    setSelectedCity(city);
  }

  onSelectedLocation = city => {
    this.props.setSelectedCity(city);
  };
  render() {
    return (
      <LocationList
        cities={this.props.citiesWeather}
        onSelectedLocation={this.onSelectedLocation}
      />
    );
  }
}

LocationListContainer.propTypes = {
  setWeather: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  citiesWeather: PropTypes.array,
  setSelectedCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
};

const mS = state => ({
  citiesWeather: getWeatherCities(state),
  city: getCity(state)
});
const mD = {
  setSelectedCity,
  setWeather
};

export default connect(
  mS,
  mD
)(LocationListContainer);
