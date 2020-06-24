import React from 'react';

import icon from './humidity.svg'
import './humidity.sass'

const Humidity = ({ humidity }) => {
  return (
    <div className="humidity">
      <img src={icon} alt="" className="humidity__icon" />
      <span className="today-highlights-item__text">{humidity} %</span>
    </div>
  )
}

export default Humidity;