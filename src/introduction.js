import React, { useState, useEffect } from "react";
import Navigation from "./Nav.js";
import axios from "axios";
import Datatable from "./datatable";
//hey
export default function Introduction() {
  const [responseData, setResponseData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.covidtracking.com/v1/us/daily.json")
      .then((res) => {
        console.log(res);
        setResponseData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <h1>Introduction to Covid-19</h1>
      <p>
        Coronavirus disease 2019 (COVID 19) is an infectious disease caused by
        severe acute respiratory syndrome coronavirus 2 . It was first
        identified in December 2019 in Wuhan, Hubei, China, and has resulted in
        an ongoing pandemic. As of 14 August 2020, more than 21 million cases
        have been reported across 188 countries and territories, resulting in
        more than 761,000 deaths. More than 13 million people have recovered.
        Common symptoms include fever, cough, fatigue, shortness of breath, and
        loss of smell and taste. While most people have mild symptoms, some
        people develop acute respiratory distress syndrome possibly precipitated
        by cytokine storm, multi-organ failure, septic shock, and blood clots.
        The time from exposure to onset of symptoms is typically around five
        days, but may range from two to fourteen days.
        <ul>
          {responseData.map((post) => (
            <li key={post.states}>
              {post.date} {post.positive} {post.negative}
            </li>
          ))}
        </ul>
        <div>
          <Datatable data={data} />{" "}
        </div>
      </p>
    </div>
  );
}
