import React from 'react';

import Slider from '../slider';

import './forecast-list.sass'


const ForecastList = ({ items }) => {
  return (
    <div className="forecast-list">
      <Slider count={8} step={2}>
        {items.map((item) => <ForecastListItem item={item} />)}
      </Slider>
    </div>
  )
}


const ForecastListItem = ({ item }) => (
  <div className="forecast-list__item">
    <span className="forecast-list__text">{item.date}</span>
    <img src={`/assets/icons/${item.icon}.svg`} alt="" className="forecast-list__icon" />
    <span className="forecast-list__text">{item.temperature} °</span>
  </div>
)

export default ForecastList;