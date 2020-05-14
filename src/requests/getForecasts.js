import axios from "axios";

const getForecasts = (setSelectedDate, setForecasts, setLocation) => {
  axios
    .get("https://mcr-codes-weather.herokuapp.com/forecast")
    .then((response) => {
      return (
        setSelectedDate(response.data.selectedDate),
        setForecasts(response.data.forecasts[0].date),
        setLocation(response.data.location)
      );
    });
};

export default getForecasts;
