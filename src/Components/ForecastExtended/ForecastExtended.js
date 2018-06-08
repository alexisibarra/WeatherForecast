import React, { Component } from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";

import "./styles.css";

class ForecastExtended extends Component {
  render() {
    const { city } = this.props;

    return (
      <Paper elevation={4}>
        {
          <div className="detail">
            <h1>{!!city ? city : "No se ha seleccionado ciudad"}</h1>
          </div>
        }
      </Paper>
    );
  }
}

ForecastExtended.propTypes = { city: PropTypes.string.isRequired };

export default ForecastExtended;
