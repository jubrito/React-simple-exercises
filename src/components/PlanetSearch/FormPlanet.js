import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { Planet } from "./Planet";

export function FormPlanet() {
  const [inputPlanet, setInputPlanet] = useState("");
  const [planetInfo, setPlanetInfo] = useState([]);

  function searchPlanet(
    event,
    input
  ) {
    event.preventDefault();
    console.log(inputPlanet);
    axios
      .get("https://api.api-ninjas.com/v1/planets?name=" + inputPlanet, {
        headers: {
          "X-Api-Key": "tKv10rCo0qMPFLQTbZPHlA==96wjiJakY76yqDuC",
        },
      })
      .then((apiData) => {
        setPlanetInfo(apiData.data[0]);
      });
  }

  function findInputPlanet(event) {
    event.preventDefault();
    setInputPlanet(event.target.value);
  }

  function clearAll(event) {
    setInputPlanet("");
    setPlanetInfo({});
  }

  return (
    <>
      <h1>Search for planets</h1>
      <form>
      <input
        type="text"
        placeholder="Type a planet"
        onChange={findInputPlanet}
        value={inputPlanet}
      />
      <div className="buttons">
        <button
          className="button-primary"
          onClick={(event) => searchPlanet(event, inputPlanet)}
          disabled={!inputPlanet}
        >
          Search
        </button>
        <button
          className="button-secondary"
          onClick={(event) => clearAll(event)}
          disabled={!inputPlanet}
        >
          Clear
        </button>
      </div>
      <div
        className="result"
        style={{ display: planetInfo.name ? "block" : "none" }}
      >
        <Planet
          name={planetInfo.name}
          mass={planetInfo.mass}
          radius={planetInfo.radius}
          period={planetInfo.period}
          temperature={planetInfo.temperature}
          distanceLightYear={planetInfo.distance_light_year}
        />
      </div>
      </form>
    </>
  );
}
