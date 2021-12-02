import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Typography from '@mui/material/Typography';

import { SearchCity } from '../cmps/SearchCity';
import { CardUI } from '../cmps/CardUI';

import { Error } from '../helpers/ErrorHandle.js';
import { ReactComponent as Heart } from '../assets/img/heart.svg';
import { ReactComponent as OutlineHeart } from '../assets/img/heart2.svg';
import { forecastDaysService } from '../services/forecastDaysService.js';
import { weatherService } from '../services/weatherService.js';
import { favoritesService } from '../services/favoritesService.js';

import { checkIfFav } from '../store/actions/favoritesActions.js';
import { removeFavorites } from '../store/actions/favoritesActions.js';

const CITY_KEY = '215854';
const TEL_AVIV = 'Tel-Aviv';
export function Weather() {
  const dispatch = useDispatch();

  const { isFave } = useSelector((state) => state.favoritesModule);
  const { currCity } = useSelector((state) => state.favoritesModule);

  const [currWeather, setCurrWeather] = useState();
  const [forecast, setForecast] = useState();
  const [cityKey, setCityKey] = useState(CITY_KEY);
  const [cityName, setCityName] = useState('');
  const [isCelsius, setIsCelsius] = useState(true);
  const [isError, setIsError] = useState(false);

 

  useEffect(() => {
    if (currCity) {
      setCityKey(currCity.cityKey);
      setCityName(currCity.cityName);
    }
    data(cityKey);
    checkIfFav(cityKey);
  }, [cityKey, isCelsius, currCity]);

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      try {
        const locationData = await weatherService.getCityLocation(
          latitude,
          longitude
        );
        setCityName(locationData.LocalizedName);
        setCityKey(locationData.Key);
      } catch (err) {
        setIsError(true);
      }
    });
  };

  const mapDailyForecast = (day) => {
    return (
      <div className='daily-forecast' key={day.EpochDate}>
        <CardUI imgId={day.Day.Icon} txt={dayForecastText(day)} />
      </div>
    );
  };

  const data = async (cityKey) => {
    if (cityKey === CITY_KEY) setCityName(TEL_AVIV);
    try {
      const currentWeather = await weatherService.getCurrWeather(cityKey);
     
      setCurrWeather(currentWeather);
    } catch (err) {
      setIsError(true);
    }
    try {
      const cityForecast = await weatherService.getForecast(cityKey, isCelsius);
      setForecast(cityForecast);
    } catch (err) {
      setIsError(true);
    }
  };

  const onSetCityKey = (cityKey, newCityName) => {
    setCityKey(cityKey);
    setCityName(newCityName);
  };

  const toggleFavorite = () => {
    if (isFave) {
      dispatch(removeFavorites(cityKey));
    } else {
      favoritesService.addFav(cityKey, cityName);
    }
    dispatch(checkIfFav(cityKey));
  };

  const handleIconId = (iconId) => {
    iconId = iconId.toString();
    if (iconId.length === 1) {
      iconId = '0' + iconId;
    }
    const imgUrl = `https://developer.accuweather.com/sites/default/files/${iconId}-s.png`;
    return imgUrl;
  };

  const dayForecastText = (day) => {
    const txt1 = forecastDaysService.getDayName(day.Date);
    const txt2 = `Min Temp: ${day.Temperature.Maximum.Value} °${day.Temperature.Maximum.Unit}`;
    const txt3 = `Max Temp: ${day.Temperature.Minimum.Value} °${day.Temperature.Minimum.Unit}`;
    const txtObj = { txt1, txt2, txt3 };
    return txtObj;
  };

  if (isError) return <Error />;
  if (!currWeather || !forecast) {
    return <div> loading... </div>;
  }

  const weather = currWeather[0];

  const WeatherIcon = handleIconId(weather.WeatherIcon);

  const tempreture = isCelsius
    ? weather.Temperature.Metric
    : weather.Temperature.Imperial;
  return (
    <div className='weather-page-container'>
      <SearchCity onSetCityKey={onSetCityKey} setIsError={setIsError} />

      <div className='weather-container'>
        <Typography
          variant='h6'
          component='div'
          sx={{ flexGrow: 1 }}
          align='center'
        >
          <div className='top flex'>
            <div className='curr-temp flex'>
              <img className='curr-weather-img' src={WeatherIcon} alt='' />
              <div className='info col'>
                <span className='city-name'>{cityName}</span>
                <span>
                  {tempreture.Value} °{tempreture.Unit}
                </span>
              </div>
            </div>
            <button
              className='fav-toggle flex'
              onClick={toggleFavorite}
              style={{ backgroundColor: 'white' }}
              >
              
              {isFave && <Heart className='heart-icon' />}
              {!isFave && <OutlineHeart className='heart-icon' />}
              <Typography
                variant='body1'
                component='div'
                sx={{ flexGrow: 1 }}
                align='center'
              >
                <span className='btn-text'>
                  {isFave ? 'Remove From Favorites' : 'Add To Favorites'}
                </span>
              </Typography>
            </button>
          </div>

          <h2 className='weather-txt'>{weather.WeatherText}</h2>

          <div className='forecast-container'>
            {forecast.DailyForecasts.map(mapDailyForecast)}
          </div>
        </Typography>
      </div>
    </div>
  );
}
