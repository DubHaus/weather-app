import React from 'react';

import ForecastTabs from '../../presentational/forecast-tabs';
import { useForecastActive } from '../../../hooks/store/forecast';

const ForecastTabsContainer = props => {
  const [active, setActive] = useForecastActive();

  const changeHandler = e => setActive(e.target.value)

  return (
    <ForecastTabs currentTab={active} onChange={changeHandler} />
  )
}

export default ForecastTabsContainer;