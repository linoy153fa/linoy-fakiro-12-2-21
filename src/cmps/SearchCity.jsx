import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as Search } from '../assets/img/search.svg';
import { weatherService } from '../services/weatherService.js';
import { setCity } from '../store/actions/favoritesActions.js';
import { utilService } from '../services/utilService';
export function SearchCity({ onSetCityKey }) {
  const dispatch = useDispatch();

  const [searchRes, setSearchRes] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [searchResClass, setSearchResClass] = useState('-invisible');

  const mapCity = (city) => {
    return (
      <div
        className='search-result'
        key={city.Key}
        onClick={() => handleSelected(city.Key, city.LocalizedName)}
      >
        {city.LocalizedName}
      </div>
    );
  };
  const handleInput = (ev) => {
    ev.preventDefault();
    const { value } = ev.target;
    try {
      setUserInput(value);
      const debounced = utilService.debounce(async () => {
        const results = await weatherService.setSearchRes(value);
        const filteredResults = results.slice(0, 5);
        setSearchRes(filteredResults);
      }, 1000);
      debounced();
    } catch (err) {}
  };

  const handleSelected = (cityKey, cityName) => {
    dispatch(setCity(cityKey, cityName));
    setUserInput('');
    onSetCityKey(cityKey, cityName);
  };

  useEffect(() => {
    if (searchRes.length > 0) setSearchResClass('');
    if (userInput === '') setSearchResClass('-invisible');
  }, [userInput, searchRes, searchResClass]);

  
  const handleBlur = () => {
    setTimeout(() => {
      setUserInput('');
    }, 200);
  };

  return (
    <div className='search-container' onBlur={handleBlur}>
      <div className='input-container'>
        <Search className='search-icon' />
        <input
          type='text'
          onChange={handleInput}
          value={userInput}
          placeholder='Search City'
        />
      </div>
      <div className={`search-results${searchResClass}`}>
        {userInput && searchRes.map(mapCity)}
      </div>
    </div>
  );
}
