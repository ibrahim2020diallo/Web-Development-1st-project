import React from "react";
import mask from "./mask.jpeg";
import distancing from "./distancing.jpeg";

export default function Prevention() {
  return (
    <div>
      <h1>Prevention of Covid-19</h1>A COVID-19 vaccine is not expected until
      2021 at the earliest. The US National Institutes of Health guidelines do
      not recommend any medication for prevention of COVID 19, before or after
      exposure to the SARS-CoV-2 virus, outside the setting of a clinical trial.
      Without a vaccine, other prophylactic measures, or effective treatments, a
      key part of managing COVID 19 is trying to decrease and delay the epidemic
      peak, known as "flattening the curve". This is done by slowing the
      infection rate to decrease the risk of health services being overwhelmed,
      allowing for better treatment of current cases, and delaying additional
      cases until effective treatments or a vaccine become available. Preventive
      measures to reduce the chances of infection include staying at home,
      wearing a mask in public, avoiding crowded places, keeping distance from
      others, washing hands with soap and water often and for at least 20
      seconds, practicing good respiratory hygiene, and avoiding touching the
      eyes, nose, or mouth with unwashed hands.
      <img src={mask} logo="face mask image" />;
      <img src={distancing} logo="image of social distancing" />;
    </div>
  );
}
