import React from 'react';

import './forecast-tabs.sass'

const ForecastTabs = ({onChange, currentTab}) => {
  return (
    <div className="forecast-tabs">
      <button onClick={onChange} value='today' className={`forecast-tabs__item ${currentTab === 'today' && 'active'}`}>Today</button>
      <button onClick={onChange} value='week' className={`forecast-tabs__item ${currentTab === 'week' && 'active'}`}>Week</button>
    </div>
  )
}

export default ForecastTabs;