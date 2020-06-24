import React from 'react';
import TodayHighlights from '../../presentational/today-highlights';
import { useCurrentWeather } from '../../../hooks/store/current-weather';
import mapResponce from '../../../utils/map-responce';
import { useLoading } from '../../../hooks/store/weather-data';
import Loading from '../../presentational/loading';

const TodayHighlightsContainer = props => {
  const [data] = useCurrentWeather();
  const [loading] = useLoading();

  const item = !loading ? mapResponce(data) : null;

  return loading ?
    <Loading height={468} />
    : <TodayHighlights item={item} />
}

export default TodayHighlightsContainer;