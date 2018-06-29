import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ForecastExtended from "../Components/ForecastExtended/ForecastExtended";
import { getForecastDataFromCities, getCity } from "../reducers/reducers";

class ForecastExtendedContainer extends Component {
  render() {
    const { city, forecastData } = this.props;
    return city && <ForecastExtended city={city} forecastData={forecastData} />;
  }
}

ForecastExtendedContainer.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.array
};

const mS = state => ({
  city: getCity(state),
  forecastData: getForecastDataFromCities(state)
});

const mD = dispatch => ({});

export default connect(
  mS,
  mD
)(ForecastExtendedContainer);
