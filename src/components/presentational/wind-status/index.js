import React from 'react';

import icon from './arrow.svg';
import './wind-status.sass'

const WindStatus = ({ windSpeed, deg }) => {
  return (
    <div className="wind-status">
      <img src={icon} alt="wind direction" className="wind-status__icon" style={{
        transform: `rotate(${deg - 45}deg)`
      }} />
      <span className="today-highlights-item__text">{windSpeed} km/h</span>
    </div>
  )
}

export default WindStatus;