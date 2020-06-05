import React from 'react';

import icon from './search.svg';
import './search.sass'

const Search = props => {
  return (
    <div className="search">
      <input id='search' type="text" className="search__input" />
      <label htmlFor="search" className="search__label">
        <img src={icon} />
      </label>
    </div>
  )
}

export default Search;