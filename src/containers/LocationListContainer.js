import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setSelectedCity } from "../actions/actions";

import LocationList from "../Components/LocationList/LocationList";

class LocationListContainer extends Component {
  onSelectedLocation = city => {
    this.props.setCity(city);
  };
  render() {
    const cities = [
      "Buenos aires, ar",
      "Caracas, ve",
      "Bogota, co",
      "Santiago, cl",
      "Washington",
      "Barcelona"
    ];
    return (
      <div>
        <LocationList
          cities={cities}
          onSelectedLocation={this.onSelectedLocation}
        />
      </div>
    );
  }
}

LocationListContainer.propTypes = {
  setCity: PropTypes.func.isRequired,
  cities: PropTypes.object.isRequired
};

const mS = state => ({
  cities: state.cities
});
const mD = dispatch => ({
  setCity: value => dispatch(setSelectedCity(value))
});

export default connect(
  mS,
  mD
)(LocationListContainer);
