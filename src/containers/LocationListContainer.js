import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setSelectedCity, setWeather } from "../actions/actions";
import { getWeatherCities } from "../reducers/reducers";

import LocationList from "../Components/LocationList/LocationList";

class LocationListContainer extends Component {
  componentDidMount() {
    const { setWeather, cities } = this.props;

    setWeather(cities);
  }

  onSelectedLocation = city => {
    this.props.setCity(city);
  };
  render() {
    return (
      <div>
        <LocationList
          cities={this.props.citiesWeather}
          onSelectedLocation={this.onSelectedLocation}
        />
      </div>
    );
  }
}

LocationListContainer.propTypes = {
  setWeather: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  citiesWeather: PropTypes.array,
  setCity: PropTypes.func.isRequired
  // city: PropTypes.string.isRequired
};

const mS = state => ({
  citiesWeather: getWeatherCities(state)
});
const mD = dispatch => ({
  setCity: value => dispatch(setSelectedCity(value)),
  setWeather: cities => dispatch(setWeather(cities))
});

export default connect(
  mS,
  mD
)(LocationListContainer);
