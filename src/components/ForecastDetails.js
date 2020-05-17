import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";
import WeatherIcon from "react-icons-weather";

const ForecastDetails = ({ forecast }) => {
  const { date, icon, temperature, wind, humidity } = forecast;
  return (
    <>
      <div className="big-date">
        <span>{Moment(date).format("ddd Do MMM")}</span>
      </div>
      <br />
      <div className="big-icon">
        <span>
          {
            <WeatherIcon
              name="owm"
              iconId={icon}
              flip="horizontal"
              rotate="90"
            />
          }
        </span>
      </div>

      <div className="temp-max">
        <span>Max Temperature: {temperature.max}&deg;c</span>
      </div>
      <br />
      <div className="temp-min">
        <span>Min Temperature: {temperature.min}&deg;c</span>
      </div>
      <br />
      <div className="big-humidity">
        <span>Humidity: {humidity}%</span>
      </div>
      <br />
      <div className="wind-speed">
        <span>
          Wind: {wind.speed}mph {<i className={"wi wi-towards-nne"} />}
        </span>
      </div>
    </>
  );
};

ForecastDetails.propTypes = {
  forecast: PropTypes.object.isRequired,
};

export default ForecastDetails;
