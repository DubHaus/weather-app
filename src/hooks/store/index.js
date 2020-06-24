import { useState } from 'react';

import store from './../../store/store';

const useRedux = (mapState, mapDispatch) => {
  const [state, setState] = useState(
    mapState ? mapState(store.getState()) : store.getState()
  );

  store.subscribe(() => {
    const newState = mapState ? mapState(store.getState()) : store.getState();
    if (state !== newState) setState(newState)
  });

  return [
    state,
    mapDispatch ? makeDispatch(mapDispatch) : setState
  ]
}

function makeDispatch(mapDispatch) {
  return (...props) => store.dispatch(mapDispatch(...props))
}

export default useRedux;