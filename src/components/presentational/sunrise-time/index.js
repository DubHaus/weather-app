import React from 'react';

import sunriseIcon from './sunrise.svg';
import sunsetIcon from './sunset.svg';
import './sunrise-time.sass'

const SunriseTime = ({ sunriseTime, sunsetTime }) => {
  return (
    <div className="sunrise-time">
      <div className="sunrise-time__item">
        <img src={sunriseIcon} alt="" className="sunrise-time__icon" />
        <span className="sunrise-time__text">{sunriseTime}</span>
      </div>
      <div className="sunrise-time__item">
        <img src={sunsetIcon} alt="" className="sunrise-time__icon" />
        <span className="sunrise-time__text">{sunsetTime}</span>
      </div>
    </div>
  )
}

export default SunriseTime;