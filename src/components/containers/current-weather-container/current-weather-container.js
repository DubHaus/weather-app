import React from 'react';
import TodayWeather from '../../presentational/today-weather';
import { useCurrentWeather } from '../../../hooks/store/current-weather';
import mapResponce from '../../../utils/map-responce';
import { useLoading } from '../../../hooks/store/weather-data';
import Loading from '../../presentational/loading';
import { useUnits } from '../../../hooks/store/units';

const CurrentWeatherContainer = props => {
  const [data] = useCurrentWeather();
  const [loading] = useLoading();
  const [units] = useUnits();
  const item =
    !loading ?
      mapResponce(data, 'dh')
      : null;

  return (
    loading ?
      <Loading height={458} />
      : <TodayWeather item={item} units={units} />
  )
}

export default CurrentWeatherContainer;