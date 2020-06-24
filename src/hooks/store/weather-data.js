import { SET } from "../../store/types/weather-data"
import useRedux from "."
import { useForecast } from "./forecast";
import { SET_LOADING, SET_ERROR } from "../../store/types/weather-data";
import { useCurrentWeather } from "./current-weather";

export const useSetWeatherData = () => {
  const [, setForecast] = useForecast();
  const [,setCurrent] = useCurrentWeather();

  const setWeatherData = (responce) => {
    setForecast(responce.data.forecast);
    setCurrent(responce.data.current);
  }

  return setWeatherData
}

export const useLoading = () => {
  const [loading, setLoading] = useRedux(
    state => state.weatherData.loading,
    loading => ({
      type: SET_LOADING,
      payload: loading
    })
  )
  return [loading, setLoading];
}


export const useError = () => {
  const [error, setError] = useRedux(
    state => state.weatherData.error,
    () => ({
      type: SET_ERROR
    })
  )
  return [error, setError]
}