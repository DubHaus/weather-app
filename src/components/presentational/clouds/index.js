import React from 'react';

import icon from './cloud.svg'
import './clouds.sass'

const Clouds = ({ clouds }) => {
  return (
    <div className="clouds">
      <img src={icon} alt="" className="clouds__icon" />
      <span className="today-highlights-item__text">{clouds} %</span>
    </div>
  )
}

export default Clouds;