import useRedux from "."
import { SET } from "../../store/types/location"

export const useLocation = () => {
  const [location, setLocation] = useRedux(
    state => state.location,
    location => ({
      type: SET,
      payload: location
    })
  )

  return [location, setLocation]
}