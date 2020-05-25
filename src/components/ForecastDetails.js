import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";
import WeatherIcon from "react-icons-weather";

const ForecastDetails = ({ forecast }) => {
  const { date, icon, temperature, wind, humidity } = forecast;
  return (
    <>
      <div className="big-date">{Moment(date).format("ddd Do MMM")}</div>
      <br />
      <div className="big-icon" data-testid="test-icon">
        {<WeatherIcon name="owm" iconId={icon} flip="horizontal" rotate="90" />}
      </div>

      <div className="temp-max">Max Temperature: {temperature.max}&deg;c</div>
      <br />
      <div className="temp-min">Min Temperature: {temperature.min}&deg;c</div>
      <br />
      <div className="big-humidity">Humidity: {humidity}%</div>
      <br />
      <div className="wind-speed">
        Wind: {wind.speed}mph {<i className={"wi wi-towards-nne"} />}
      </div>
    </>
  );
};

ForecastDetails.propTypes = {
  forecast: PropTypes.object.isRequired,
};

export default ForecastDetails;
