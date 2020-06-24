import updateUntits from "./update-untits"
import updateForecast from "./update-forecast"
import updateLocation from './update-location';
import { combineReducers } from '../utils';
import updateWeatherData from './update-weather-data'

const reducer = (state, action) => {
  if (!state) state = {}

  return combineReducers(state, action, {
    units: updateUntits,
    weatherData: updateWeatherData,
    location: updateLocation
  })
}

export default reducer;