import { SET } from "../types/current-weather"

export default (state, action) => {
  if (state === undefined) {
    return {}
  }

  switch (action.type) {

    case SET:
      return action.payload

    default:
      return state
  }
}