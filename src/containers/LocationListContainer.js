import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setCity } from "../actions/actions";

import LocationList from "../Components/LocationList/LocationList";

class LocationListContainer extends Component {
  onSelectedLocation = city => {
    this.props.setCity(city);
  };
  render() {
    return (
      <div>
        <LocationList
          cities={this.props.cities}
          onSelectedLocation={this.onSelectedLocation}
        />
      </div>
    );
  }
}

LocationListContainer.propTypes = {
  setCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired
};

const mS = state => ({
  cities: state.cities
});
const mD = dispatch => ({
  setCity: value => dispatch(setCity(value))
});

export default connect(
  mS,
  mD
)(LocationListContainer);
