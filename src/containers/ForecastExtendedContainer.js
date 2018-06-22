import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ForecastExtended from "../Components/ForecastExtended/ForecastExtended";

class ForecastExtendedContainer extends Component {
  componentWillMount() {}

  render() {
    const { city } = this.props;
    return city && <ForecastExtended city={city} />;
  }
}

ForecastExtendedContainer.propTypes = { city: PropTypes.string.isRequired };

const mS = state => ({
  city: state.city
});

const mD = dispatch => ({});

export default connect(
  mS,
  mD
)(ForecastExtendedContainer);
