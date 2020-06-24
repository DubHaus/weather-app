import React from 'react';
import Search from '../../presentational/search';
import { useState } from 'react';
import { getLocation } from '../../../api/location';
import { useLocation } from '../../../hooks/store/location';

const SearchContainer = props => {
  const [value, setValue] = useState('');
  const [findedItems, setFindedItems] = useState([]);
  const [, setLocation] = useLocation();

  const changeHandler = (e) => setValue(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();
    getLocation(value)
      .then(responce => {
        const data = mapResponceData(responce.data);
        setFindedItems(data)
      })
  }

  const onChangeLocation = (e) => {
    const item = findedItems.find(el => el.id == e.target.value);
    setLocation(item);
    setValue('');
    setFindedItems([]);
  }

  return (
    <Search
      value={value}
      setValue={changeHandler}
      onSubmit={submitHandler}
      findedItems={findedItems}
      choseItem={onChangeLocation} />
  )
}

export default SearchContainer;


const mapResponceData = (data) => {
  return data.results.map((el, idx) => ({
    title: el.formatted,
    geometry: { lat: el.geometry.lat, lon: el.geometry.lng },
    id: idx
  }))
}