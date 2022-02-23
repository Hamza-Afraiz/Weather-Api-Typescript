import React from "react";
import "./day.css";
const clear = require("../../assets/images/clear.PNG");

const rain = require("../../assets/images/rain.PNG");
const clearAndRain = require("../../assets/images/heavyRain.PNG");
interface oneInFiveDayProps {
  tempMin: number | undefined;
  tempMax: number | undefined;
  weatherType: string | undefined;
  day: string | undefined;
}
const Day = ({
  weatherType,
  tempMax,
  tempMin,
  day,
}: oneInFiveDayProps) => {
  return (
    <div className="listCard">
      <div>{day}</div>
      <div className="img">
        <img
          src={
            weatherType === "Clouds"
              ? clearAndRain
              : weatherType === "Rain"
              ? rain
              : clear
          }
          alt="Logo"
        />
      </div>
      <div>
        {Math.trunc(tempMin!)} ` {Math.trunc(tempMax!)} `
      </div>
    </div>
  );
};

export default Day;
