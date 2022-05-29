import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
const DisplayChart = () => {
  const [data, setData] = useState();
  const [city, setCity] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=f11f1803dc3041ceb0f35839222905&q=${city}&aqi=no`
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }, [city]);
  return (
    <div>
      {" "}
      <div className="input">
        <input
          type="text"
          placeholder="Enter The City"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
      </div>
      <div className="output">
        <div className="weather">
          <h4>{data.location.name}</h4>

          <h3> {data.current.temp_c}&#x2103;</h3>
          <div className="day-status">{}</div>
        </div>

        <div className="weather-flex">
          <div className="location">
            <div className="country">
              <p>Country</p>
              <p className="country-name">{data.location.country}</p>
            </div>
            <div className="state">
              <p>{data.location.region}</p>
              <p className="state-name">Maharashtra</p>
            </div>
            <div className="time-zone">
              <p>{data.location.tz_id}</p>
              <p className="time-zone-name">Asia/Kolkata</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayChart;
