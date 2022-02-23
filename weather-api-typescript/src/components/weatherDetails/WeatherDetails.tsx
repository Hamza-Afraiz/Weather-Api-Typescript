import React, { useState } from "react";
import "./weatherDetails.css";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import Day from "../day/Day";
import SelectedDay from "../selectedDay/SelectedDay";
import {
  ChangeTemperatureUnit,
} from "../../store/slices/weatherDataslice";

const WeatherDetails = () => {
  //daySelected is used to keep the track of selected day to display in the main section

  const [daySelected, setSelectedDay] = useState<number>(0);

  const dispatch = useAppDispatch();

  //getting data from redux state
  const Days5Forecast = useAppSelector((state) => state.weather.weatherData);

  //getting error state in case of wrong request

  const error = useAppSelector((state) => state.weather.error);

  //what if we want to see temperature in celcius and farenheit

  const handleChangeTemperatureUnit = async (tempUnit: string) => {
    dispatch(ChangeTemperatureUnit(tempUnit));
  };

  //********************this is the main section (the selected day) */

  /// ************************end of jsx element of main section*************88888

  //handling the condition when we dont have any data
  if (Days5Forecast.length > 0) {
    return (
      <div className="container">
        {/* this is the main section which is selected */}

        <SelectedDay
          weatherData={Days5Forecast}
          daySelected={daySelected}
          handleChangeTemperatureUnit={handleChangeTemperatureUnit}
        />

        {/* end of main region */}

        {/*  this is the horizontal row of 5 days  */}

        <div className="listCardContainer">
          {Days5Forecast.map((item, index) => (
            <div
              className={
                daySelected === index ? "selectedListCardContainer" : ""
              }
              key={index}
              onClick={() => {
                setSelectedDay(index);
              }}
            >
              <Day
                day={item.day}
                tempMin={item.tempMin}
                tempMax={item.tempMax}
                weatherType={item.weatherType}
              />
            </div>
          ))}
        </div>

        {/* end of list   */}
      </div>
    );
  } else {
    return <div>{error}</div>;
  }
};

export default WeatherDetails;
