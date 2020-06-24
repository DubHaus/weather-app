import { useEffect } from 'react';

import useRedux from "."
import { SET } from '../../store/types/units';

export const useUnits = () => {
  const [units, setUnits] = useRedux(
    state => state.units,
    units => ({
      type: SET,
      payload: units
    })
  );

  useEffect(() => {

  }, [units])

  return [units, setUnits]
}