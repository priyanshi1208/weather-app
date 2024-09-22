import React, { useEffect, useRef, useState } from 'react';
import { searchUsestyle } from '../../styles/weatherStyle';
import { useDispatch } from 'react-redux';
import { setSearchedCity, setWeatherReportData } from '../../store/weatherReducer';
import { getDailyForecastReport, getWeatherReportFromApi } from './weatherReportActions';
import { CACHE_KEY_CITY, CACHE_KEY_WEATHER } from './constants/utilityConstants';

const cities = [
  'Noida',
  'Gurgaon',
  'Kanpur',
  'Faridabad',
  'Lucknow',
  'Mumbai'
];

const CustomCityDropdown = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');
  const dispatch = useDispatch();
  const classes = searchUsestyle();
  const dropdownRef = useRef()

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    dispatch(setSearchedCity(e.target.value));
    if (e.target.value) {
      const weatherReport = getWeatherReportFromApi(e.target.value);
      dispatch(setWeatherReportData(weatherReport));
    }
  };

  const handleInputFocus = () => {
    setIsDropdownOpen(true);
  };

  const handleCitySelect = async (city) => {
    setSelectedCity(city);
    setIsDropdownOpen(false);
    setSearchQuery('');
    const weatherReport = await getWeatherReportFromApi(city);
    dispatch(setWeatherReportData(weatherReport));
    dispatch(getDailyForecastReport(city))
    //storing in local storage to get last searched data in offline mode
    localStorage.setItem(CACHE_KEY_CITY, city);
    localStorage.setItem(CACHE_KEY_WEATHER, JSON.stringify(weatherReport));

  };

  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={classes.container} ref={dropdownRef}>
      <input
        type="text"
        value={selectedCity}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        placeholder="Select a city"
        className={classes.input}
      />
      {isDropdownOpen && (
        <div className={classes.dropdown}>
          <ul className={classes.cityList}>
            {filteredCities.length > 0 ? (
              filteredCities.map((city) => (
                <li
                  key={city}
                  onClick={() => handleCitySelect(city)}
                  className={classes.cityItem}
                >
                  {city}
                </li>
              ))
            ) : (
              <li className={classes.noResults}>No cities found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomCityDropdown;
