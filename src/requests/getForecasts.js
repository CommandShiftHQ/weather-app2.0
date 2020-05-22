import axios from "axios";

export const getForecasts = (
  setSelectedDate,
  setForecasts,
  setLocation,
  searchQuery
) => {
  let endpoint = `https://mcr-codes-weather.herokuapp.com/forecast`
  if (searchQuery) {
    endpoint = `${endpoint}?city=${searchQuery}`;
  }
  
  axios.get(endpoint)
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
};

export default getForecasts;
