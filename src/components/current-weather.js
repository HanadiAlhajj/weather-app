import React from 'react'
import '../assets/css/currentWeather.css'

const CurrentWeather = ({data}) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
        <p className="city">{data.city}</p>
        <p className="weather-description">{data.description}</p>
        </div>
        <img alt="weather" icon="weather-icon" src={`icons/${data.icon}.png`} />
      </div>
     <div className="bottom">
      <p className="tempreature">{data.temp}°C</p>
      <div className="details">
      <div className="parameter-row">
        <span className="label">Feels LiKe</span>
        <span className="value">{data.feelsLike}°C</span>
        </div>
        <div className="parameter-row"> 
        <span className="label">Humidity</span>
        <span className="value">{data.humidity}%</span>
        </div>
        <div className="parameter-row">
        <span className="label">Wind</span>
        <span className="value">{data.wind} m/h</span>
        </div>
        <div className="parameter-row">
        <span className="label">Pressure</span>
        <span className="value">{data.pressure} hpa</span>
        </div>
      </div>
     </div>
      </div>
      )
}

export default CurrentWeather
