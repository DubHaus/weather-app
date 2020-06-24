import { SET_ACTIVE, SET_DATA, SET_LOADING } from "../types/forecast"

export default (state, action) => {
  if (state === undefined) {
    return {
      active: 'week',
      data: {
        week: {},
        today: {}
      }
    }
  }

  switch (action.type) {

    case SET_DATA:
      return {
        ...state,
        data: action.payload
      }

    case SET_ACTIVE:
      return {
        ...state,
        active: action.payload
      }

    default:
      return state
  }
}