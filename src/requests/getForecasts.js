import axios from "axios";

export const getForecasts = (
  setSelectedDate,
  setForecasts,
  setLocation,
  searchQuery
) => {
  if (searchQuery) {
    axios
      .get(
        `https://mcr-codes-weather.herokuapp.com/forecast?city=${searchQuery}`
      )
      .then((response) => {
        return (
          setSelectedDate(response.data.forecasts[0].date),
          setForecasts(response.data.forecasts),
          setLocation(response.data.location)
        );
      })
      .catch(() => {
        alert("No such town! Please try again");
      });
  } else {
    axios
      .get("https://mcr-codes-weather.herokuapp.com/forecast")
      .then((response) => {
        return (
          setSelectedDate(response.data.forecasts[0].date),
          setForecasts(response.data.forecasts),
          setLocation(response.data.location)
        );
      });
  }
};

export default getForecasts;
