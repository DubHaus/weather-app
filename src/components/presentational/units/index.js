import React from 'react';

import './units.sass';

const Units = ({ currentUnits, onChange }) => {
  return (
    <div className="units">
      <button onClick={onChange} value='metric' className={`units__item ${currentUnits === 'metric' && 'active'}`}>°C</button>
      <button onClick={onChange} value='imperial' className={`units__item ${currentUnits === 'imperial' && 'active'}`}>°F</button>
    </div>
  )
}

export default Units;