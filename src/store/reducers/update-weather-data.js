import updateForecast from './update-forecast';
import { combineReducers } from '../utils';
import { SET_DATA } from '../types/forecast';
import { SET_LOADING } from '../types/weather-data';
import updateCurrent from './update-current';

export default (state, action) => {
  if (!state) state = {}

  return combineReducers(state, action, {
    forecast: updateForecast,
    current: updateCurrent,
    error: updateError,
    loading: updateLoading,
  })
}


const updateLoading = (state, action) => {
  if (state === undefined) {
    return true
  }

  switch (action.type) {

    case SET_LOADING:
      return action.payload

    default:
      return state
  }
}

const updateError = (state, action) => {
  if (state === undefined) {
    return false
  }

  switch (action.type) {

    case SET_DATA:
      if (action.payload.isError) return true

    default:
      return state
  }
}




