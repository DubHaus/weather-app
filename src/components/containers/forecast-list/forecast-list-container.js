import React from 'react';
import ForecastList from '../../presentational/forecast-list';
import { useForecast } from '../../../hooks/store/forecast';
import { useLoading, useError } from '../../../hooks/store/weather-data';
import mapResponce from '../../../utils/map-responce';
import Loading from '../../presentational/loading';

const ForecastListContainer = props => {
  const [loading] = useLoading();
  const [error] = useError();
  const [forecast] = useForecast();

  const dateType =
    forecast.active === 'week' ?
      'd' : 'h';

  const items = !loading ?
    forecast.data[forecast.active].slice(0, 24).map(el => mapResponce(el, dateType))
    : []

  return loading ?
    <Loading height={163} />
    : <ForecastList items={items} />
}

export default ForecastListContainer;


