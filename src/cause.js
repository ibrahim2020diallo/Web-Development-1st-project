import React from "react";
import virus from "./virus.jpeg";

export default function Cause() {
  return (
    <div>
      <h1>Cause of Covid-19</h1>
      COVID 19 is a new disease, and many of the details of its spread are still
      under investigation. It spreads easily between people more easily than
      influenza but not as easily as measles. People are most infectious when
      they show symptoms (even mild or non-specific symptoms), but may be
      infectious for up to two days before symptoms appear (pre-symptomatic
      transmission). They remain infectious for an estimated seven to twelve
      days in moderate cases and an average of two weeks in severe cases. People
      can also transmit the virus without showing any symptom (asymptomatic
      transmission), but it is unclear how often this happens. A June 2020
      review found that 40–45% of infected people are asymptomatic.
      <img src={virus} alt="virus image" />;
    </div>
  );
}
