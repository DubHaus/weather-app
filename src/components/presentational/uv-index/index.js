import React from 'react';

import './uv-index.sass'
import Semicircle from '../semicircle';

const UVIndex = ({ uvIdx }) => {
  const deg = uvIdx / 0.06;
  return (
    <div className="UV-index">
      <div className="uv-diagramm">
        <div className="uv-diagramm__items">
          <span>1</span>
          <span>3</span>
          <span>6</span>
          <span>9</span>
          <span>12</span>
        </div>
        <Semicircle width={250} deg={deg} strokeWidth={30} color='#FFBF5E' backgroundColor='#fff' />
      </div>
      <span className="today-highlights-item__text uv-diagramm__title">{uvIdx}</span>
    </div>
  )
}

export default UVIndex;