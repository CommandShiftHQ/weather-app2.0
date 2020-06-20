import React from "react";
import { render } from "@testing-library/react";
import LocationDetails from "../components/LocationDetails";

describe("LocationDetails", () => {
  const { asFragment } = render(
    <LocationDetails city="Manchester" country="UK" />
  );

  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct city and location props", () => {
    const { getByText } = render(
      <LocationDetails city="Manchester" country="UK" />
    );

    expect(getByText("Manchester, UK")).toBeTruthy();
  });
});
