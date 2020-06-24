import React from 'react';

import icon from './sun.svg';
import './loading.sass';

const Loading = ({ height }) => {
  return (
    <div style={{ height: `${height}px` }} className="loading">
      <img src={icon} className='loading__img' alt="loading-icon" />
    </div>
  )
}

export default Loading;