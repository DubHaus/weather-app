import React from 'react';
import Search from '../search';

import './app.sass'
import Units from '../units';
import ForecastTabs from '../forecast-tabs';
import TodayWeather from '../today-weather';
import TodayHighlights from '../today-highlights';
import ForecastList from '../forecast-list';

const App = ({
  searchComponent,
  currentWeatherComponent,
  forecastTabsComponent,
  unitsComponent,
  forecastComponent,
  todayHighlightsComponent
}) => {
  return (
    <div className="weather-app">
      <div className="left-column">
        <div className="header">
          {searchComponent}
        </div>
        {currentWeatherComponent}
      </div>
      <div className="right-column">
        <div className="header">
          {forecastTabsComponent}
          {unitsComponent}
        </div>
        {forecastComponent}
        {todayHighlightsComponent}
      </div>
    </div>
  )
}

export default App;