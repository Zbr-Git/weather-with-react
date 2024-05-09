import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import './SearchBox.css';
import Button from '@mui/material/Button';

function SearchBox({ updateInfo }) {
  let [city, setCity] = useState('');
  let [error, setError] = useState(false);
  const URL = 'https://api.openweathermap.org/data/2.5/weather';  
  const API_KEY = 'd9a2485a972ab8da057247c1db4b32b1';
  const getWeatherInfo = async () => {
    try {
      const res = await fetch(`${URL}?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await res.json();
      const result = {
        city: city,
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        humidity: data.main.humidity,
        feelsLike: data.main.feels_like,
        weather: data.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      // Handle the error locally
      console.error('Error fetching weather data:', err);
      throw new Error('Failed to fetch weather data');
    }
  };
  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handelSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setCity('');
      setError(false);
      const newInfo = await getWeatherInfo();

      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="searchBox">
      <form onSubmit={handelSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          onChange={handleChange}
          value={city}
        />
        <br /> <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{ color: 'red' }}>No Such Place exists!</p>}
      </form>
    </div>
  );
}

export default SearchBox;
