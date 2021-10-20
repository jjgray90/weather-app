import React from "react";
import { render } from "@testing-library/react";
import WeatherContainer from "./WeatherContainer";

describe("WeatherContainer tests", () => {
  it("should render", () => {
    expect(render(<WeatherContainer />)).toBeTruthy();
  });
});
