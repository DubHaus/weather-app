import { SET } from "../types/location"

export default (state, action) => {
  if (state === undefined) {
    return {
      lat: 58.4169213,
      lon: 34.015279,
      title: 'Боровичи'
    }
  }

  switch (action.type) {

    case SET:
      const { title, geometry } = action.payload;
      return {
        ...state,
        title,
        ...geometry
      }

    default:
      return state
  }
}