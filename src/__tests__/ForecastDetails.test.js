import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../components/ForecastDetails";

describe("ForecastDetails", () => {
  const mockForecast = {
    date: 1590418800000,
    humidity: 32,
    icon: "800",
    temperature: { max: 22, min: 21 },
    wind: { speed: 4, direction: "wsw" },
  };

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecast={mockForecast} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct city and location props", () => {
    const { getByText, getByTestId } = render(
      <ForecastDetails forecast={mockForecast} />
    );

    expect(getByText("Mon 25th May")).toHaveClass("big-date");
    expect(getByTestId("test-icon")).toHaveClass("big-icon");
    expect(getByText("Max Temperature: 22°c")).toHaveClass("temp-max");
    expect(getByText("Min Temperature: 21°c")).toHaveClass("temp-min");
    expect(getByText("Humidity: 32%")).toHaveClass("big-humidity");
    expect(getByText("Wind: 4mph")).toHaveClass("wind-speed");
  });
});
