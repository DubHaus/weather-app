import React, { useEffect } from 'react';

import App from '../../presentational/app';
import UnitsContainer from '../units/units-container';
import ForecastTabsContainer from '../forecast-tabs/forecast-tabs-container';
import ForecastListContainer from '../forecast-list/forecast-list-container';
import { getWeatherData } from '../../../api/weather-data';

import { useLocation } from '../../../hooks/store/location';
import { useUnits } from '../../../hooks/store/units';
import { useSetWeatherData, useLoading } from '../../../hooks/store/weather-data';
import CurrentWeatherContainer from '../current-weather-container/current-weather-container';
import TodayHighlightsContainer from '../today-highlight/today-highlight-container';
import SearchContainer from '../search/search-container';

const AppContainer = props => {
  const [location] = useLocation();
  const [units] = useUnits();
  const setData = useSetWeatherData();
  const [, setLoading] = useLoading();

  useEffect(() => {
    setLoading(true)
    getWeatherData(location, units)
      .then(data => {
        setData(data)
        setLoading(false)
      })
  }, [location, units])

  return (
    <App
      searchComponent={<SearchContainer />}
      currentWeatherComponent={<CurrentWeatherContainer />}
      forecastTabsComponent={< ForecastTabsContainer />}
      unitsComponent={< UnitsContainer />}
      forecastComponent={< ForecastListContainer />}
      todayHighlightsComponent={<TodayHighlightsContainer />}
    />
  )
}

export default AppContainer;