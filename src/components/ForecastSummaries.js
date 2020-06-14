import React from "react";
import PropTypes from "prop-types";
import ForecastSummary from "./ForecastSummary";

const ForecastSummaries = ({ forecasts, handleForecastSelect }) => {
  return (
    <div className="ForecastSummaries">
      {forecasts.map((forecast) => (
        <ForecastSummary
          key={forecast.date}
          date={forecast.date}
          description={forecast.description}
          icon={forecast.icon}
          temperature={forecast.temperature.max}
          handleForecastSelect={handleForecastSelect}
        />
      ))}
    </div>
  );
};

ForecastSummaries.propTypes = {
  forecasts: PropTypes.array.isRequired,
  // handleForecastSelect: PropTypes.func.isRequired,
};

export default ForecastSummaries;
