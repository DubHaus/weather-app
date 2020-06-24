import React from 'react';

import icon from './search.svg';
import './search.sass'

const Search = ({ value, setValue, onSubmit, findedItems, choseItem }) => {
  return (
    <div className="search__container">
      <form onSubmit={onSubmit} className="search">
        <input value={value} onChange={setValue} id='search' placeholder='Search for places ...' type="text" className="search__input" />
        <label htmlFor="search" className="search__label">
          <img className='search__icon' src={icon} alt='search-icon' />
        </label>
      </form>
      <div className="search__items">
        {findedItems.map(({ title, id }) => <button value={id} onClick={choseItem} className='search__item'>{title}</button>)}
      </div>
    </div>

  )
}

export default Search;