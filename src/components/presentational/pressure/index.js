import React from 'react';

import './pressure.sass'
import icon from './pressure.svg'

const Pressure = ({ pressure }) => {
  return (
    <div className="pressure">
      <img src={icon} className="pressure__icon" />
      <span className="today-highlights-item__text">{pressure} mPa</span>
    </div>
  )
}

export default Pressure;