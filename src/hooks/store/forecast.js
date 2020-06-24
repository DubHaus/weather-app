import useRedux from "."
import { SET_ACTIVE, SET_DATA } from "../../store/types/forecast"


export const useForecastActive = () => {
  const [active, setActive] = useRedux(state => state.weatherData.forecast.active,
    active => ({
      type: SET_ACTIVE,
      payload: active
    }));

  return [active, setActive]
}

export const useForecast = () => {
  const [data, setData] = useRedux(
    state => state.weatherData.forecast,
    responce => ({
      type: SET_DATA,
      payload: responce
    })
  )

  return [data, setData];
}