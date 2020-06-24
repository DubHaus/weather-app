import React from 'react';

import { useUnits } from '../../../hooks/store/units';

import Units from '../../presentational/units';

const UnitsContainer = props => {
  const [units, setUnits] = useUnits();
  const changeHandler = e => setUnits(e.target.value);

  return (
    <Units currentUnits={units} onChange={changeHandler} />
  )
}

export default UnitsContainer;