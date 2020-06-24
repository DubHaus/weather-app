import { SET } from "../types/units";

export default (state, action) => {
  if (state === undefined) {
    return 'metric'
  }

  switch (action.type) {

    case SET:
      return action.payload

    default:
      return state;
  }
}