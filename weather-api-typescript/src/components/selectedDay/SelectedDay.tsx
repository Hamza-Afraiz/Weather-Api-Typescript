import React from 'react';
const clear = require("../../assets/images/clear.PNG");
const rain = require("../../assets/images/rain.PNG");
const clearAndRain = require("../../assets/images/heavyRain.PNG");


const SelectedDay = ({daySelected,weatherData,handleChangeTemperatureUnit}:any) => {
  let temperatureMax=Math.trunc(weatherData[daySelected]?.tempMax);
    return (
        <div>
            <div>

     
<div className="dayDescription">
    <p className="highlighted">{weatherData[daySelected]?.cityName}</p>
    <p>{weatherData[daySelected]?.day}</p>
    <p>{weatherData[daySelected]?.weatherType}</p>
  </div>
<div className="dayDetails">
    <div>
      <img
        className="img"
        src={
          weatherData[daySelected]?.weatherType === "Clouds"
            ? clearAndRain
            : weatherData[daySelected]?.weatherType === "Rain"
            ? rain
            : clear
        }
        alt="Logo"
      />
    </div>
    <div className="tempMain">
      {temperatureMax}
      <div
        onClick={() => handleChangeTemperatureUnit("metric")}
        className="tempType"
      >
        C |
      </div>
      <div
        onClick={() => handleChangeTemperatureUnit("imperial")}
        className="tempType"
      >
        F
      </div>
    </div>
    <div className="pressure">
      <p>Pressure :{weatherData[daySelected]?.pressure}hPa</p>
      <p>Humidity :{weatherData[daySelected]?.humidity}%</p>
      <p>Wind Speed :{weatherData[daySelected]?.windSpeed} m/s</p>
    </div>
  </div>
  </div>

            
        </div>
    );
};

export default SelectedDay;