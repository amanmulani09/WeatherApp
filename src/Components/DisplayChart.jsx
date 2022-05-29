import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
const DisplayChart = () => {
  const [state, setState] = useState("State");
  const [country, setCountry] = useState("Country");
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("temp");
  const [tz, setTz] = useState("Time Zone");
  const [name, setName] = useState("CityName");
  const [condition, setCondition] = useState("Wheather");

  const buttonhandle = () => {
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=f11f1803dc3041ceb0f35839222905&q=${city}&aqi=no`
      )
      .then((res) => {
        console.log(res.data);
        setCondition(res.data.current.condition.text);

        setCountry(res.data.location.country);
        setState(res.data.location.region);
        setTz(res.data.location.tz_id);
        setTemp(res.data.current.temp_c);
        setName(res.data.location.name);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {" "}
      <h2 className="first-h">World Weather App</h2>
      <div className="input">
        <input
          type="text"
          placeholder="Enter The City"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <button className="submit" onClick={buttonhandle}>
          Get Data
        </button>
      </div>
      <div className="output">
        <div className="weather">
          <h4>{name}</h4>

          <h3> {temp}&#x2103;</h3>
          <div className="day-status">{condition}</div>
        </div>

        <div className="weather-flex">
          <div className="location">
            <div className="country">
              <p>Country</p>
              <p className="country-name">{country}</p>
            </div>
            <div className="state">
              <p>State</p>
              <p className="state-name">{state}</p>
            </div>
            <div className="time-zone">
              <p>Time Zone</p>
              <p className="time-zone-name">{tz}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayChart;
