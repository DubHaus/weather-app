import React from 'react';
import UVIndex from '../uv-index';
import WindStatus from '../wind-status';
import SunriseTime from '../sunrise-time';
import Humidity from '../humidity';
import Pressure from '../pressure';
import Clouds from '../clouds'

import './today-highlights.sass'

const TodayHighlights = ({ item }) => {
  return (
    <div className="today-highlights">
      <h3 className="today-highlights__title">Today's Highlights</h3>
      <div className="today-highlights__items">
        <TodayHighlightsItem title='UV index'>
          <UVIndex uvIdx={item.uvi} />
        </TodayHighlightsItem>
        <TodayHighlightsItem title='Wind status'>
          <WindStatus windSpeed={item.wind_speed} deg={item.wind_deg} />
        </TodayHighlightsItem>
        <TodayHighlightsItem title='Sunrise & sunset'>
          <SunriseTime sunriseTime={item.sunrise} sunsetTime={item.sunset} />
        </TodayHighlightsItem>
        <TodayHighlightsItem title='Humidity'>
          <Humidity humidity={item.humidity} />
        </TodayHighlightsItem>
        <TodayHighlightsItem title='Clouds'>
          <Clouds clouds={item.clouds} />
        </TodayHighlightsItem>
        <TodayHighlightsItem title='Pressure'>
          <Pressure pressure={item.pressure} />
        </TodayHighlightsItem>
      </div>
    </div>
  )
}


const TodayHighlightsItem = ({ title, children }) => {
  return (
    <div className="today-highlights-item">
      <h4 className="today-highlights-item__title">{title}</h4>
      {children}
    </div>
  )
}

export default TodayHighlights;