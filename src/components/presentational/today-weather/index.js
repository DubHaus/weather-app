import React from 'react';

import './today-weather.sass'

const TodayWeather = ({ item, units }) => {
  return (
    <div className="today-weather">
      <img src={`/assets/icons/${item.icon}.svg`} alt="" className="today-weather__icon" />
      <p className="today-weather__temerature">{item.temperature} <span >°{units === 'metric' ? 'C' : 'F'}</span></p>
      <p className="today-weather__subtitle">{item.date}</p>
      <p className="today-weather__text">{item.description}</p>
    </div >
  )
}

export default TodayWeather;