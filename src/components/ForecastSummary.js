import React from "react";
import moment from "moment";
import PropTypes from "prop-types";

const ForecastSummary = ({
  date,
  temperature,
  description,
  icon,
  handleForecastSelect,
}) => {
  return (
    <>
      <div className="date">
        <span>{moment(date).format("ddd Do MMM")}</span>
        <div className="temperature">
          <span>{temperature}&deg;c</span>
        </div>
        <div className="description">
          <span>{description}</span>
        </div>
        <div className="icon">
          <span>{icon}</span>
        </div>
        <button value={date} onClick={handleForecastSelect}>
          More Details
        </button>
      </div>
    </>
  );
};

ForecastSummary.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
  }),
  handleForecastSelect: PropTypes.func.isRequired,
};

export default ForecastSummary;
