import React from "react";
import "./SeasonDisplay.css";

const SeasonConfig = {
  summer: {
    text: "Let's Hit the Beach baby!",
    iconDisplay: "sun",
  },
  winter: {
    text: "burr, its chilly",
    iconDisplay: "snowflake",
  },
};

const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? "summer" : "winter";
  } else {
    return latitude > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconDisplay } = SeasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i class={`icon-left massive ${iconDisplay} icon`}></i>
      <h1 className="season">{text}</h1>

      <i class={`icon-right massive ${iconDisplay} icon`}></i>
    </div>
  );
};

export default SeasonDisplay;
