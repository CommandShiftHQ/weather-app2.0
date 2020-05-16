import React, { useState, useEffect } from "react";
import "./styles/App.css";
import getForecasts from "./requests/getForecasts";
import LocationDetails from "./components/LocationDetails";
import ForecastSummaries from "./components/ForecastSummaries";
import SearchForm from "./components/SearchForm";

function App() {
  const [selectedDate, setSelectedDate] = useState(0);
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({
    city: null,
    country: null,
  });
  const [query, setQuery] = useState("");

  useEffect(() => {
    getForecasts(setSelectedDate, setForecasts, setLocation);
  }, []);

  const handleForecastSelect = (e) => {
    setSelectedDate(parseInt(e.target.value, 10));
  };

  const handleCitySubmit = () => {
    getForecasts(setSelectedDate, setForecasts, setLocation, query);
  };

  const { city, country } = location;

  return (
    <>
      <LocationDetails city={city} country={country} />
      <SearchForm
        handleCitySubmit={handleCitySubmit}
        query={query}
        setQuery={setQuery}
      />
      <ForecastSummaries
        forecasts={forecasts}
        handleForecastSelect={handleForecastSelect}
      />
    </>
  );
}

export default App;
