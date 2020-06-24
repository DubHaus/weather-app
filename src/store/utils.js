export const combineReducers = (state, action, reducers) => {
  return Object.fromEntries(
    Object.entries(reducers).map(([key, value]) => {
      return [
        key,
        value(state.hasOwnProperty(key) ? state[key] : undefined, action)
      ]
    })
  )
}