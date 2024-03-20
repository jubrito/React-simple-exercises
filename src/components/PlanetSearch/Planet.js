import React from "react";

export function Planet({
  name,
  mass,
  radius,
  period,
  temperature,
  distanceLightYear,
}) {
  return (
    <>
      <p>Name: {name}</p>
      <p>Mass: {mass}</p>
      <p>Radius: {radius}</p>
      <p>Period: {period}</p>
      <p>Temperature: {temperature}</p>
      <p>Distance (pght year): {distanceLightYear}</p>
    </>
  );
}
