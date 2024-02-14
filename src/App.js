
import './App.css';
import CurrentWeather from './components/current-weather';
import Forecast from './components/forecast';
import Search from './components/search';
import React, { useState } from 'react';
import { WEATHER_API_KEY , WEATHER_API_URL} from './api';
function App() {
  const [currentWeather,setCurrentWeather]=useState(null);
  const [forecast,setForecast]=useState(null);
 
  const handleSearchData =(searchData) =>{
        const [lat,lon] = searchData.value.split(" ");
      const fetchCurrentWeather = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
      const fetchforecastWeather = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
      Promise.all([fetchCurrentWeather,fetchforecastWeather])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        console.log("in handlesearch");
        setCurrentWeather({city:searchData.label,
          desritpion:weatherResponse.weather[0].description,
          feelsLike:Math.round(weatherResponse.main.feels_like),
          temp:Math.round(weatherResponse.main.temp),
          humidity: weatherResponse.main.humidity,
          pressure: weatherResponse.main.pressure,
          wind:weatherResponse.wind.speed,
          icon :weatherResponse.weather[0].icon});
        setForecast({city:searchData.label,...forecastResponse});
      
      
      }).catch(err=>{console.log(err)})
      
      
  }
  console.log(forecast);
  return (
    <div className="container">
      <Search onhandleSearch = {handleSearchData}/>
      {currentWeather && <CurrentWeather data={currentWeather}/>}
      
      {forecast && <Forecast data={forecast}/>}
    </div>
  );
}

export default App;
