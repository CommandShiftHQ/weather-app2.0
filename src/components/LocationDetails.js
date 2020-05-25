import React from "react";
import PropTypes from "prop-types";

const LocationDetails = ({ city, country }) => {
  return (
    <>
      <h1 className="location">
        {city}, {country}
      </h1>
    </>
  );
};

LocationDetails.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string,
};

export default LocationDetails;
