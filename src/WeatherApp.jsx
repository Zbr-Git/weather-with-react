import React, { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';

function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: 'Lahore',
    feelslike: 24.84,
    temp: 19.03,
    tempMin: 25.05,
    tempMax: 26.02,
    humidity: 45,
    weather: 'haze',
  });

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Weather App by Z</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}

export default WeatherApp;
