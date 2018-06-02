import React from "react";
import PropTypes from "prop-types";

const Location = ({ location }) => {
  return (
    <div className="LocationCont">
      <h1>{location}</h1>
    </div>
  );
};

Location.propTypes = {
  location: PropTypes.string.isRequired
};

export default Location;
