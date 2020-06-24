import useRedux from "."
import { SET } from "../../store/types/current-weather";

export const useCurrentWeather = () => {
  const [data, setData] = useRedux(
    state => state.weatherData.current,
    responce => ({
      type: SET,
      payload: responce
    }));

  return [data, setData]
}