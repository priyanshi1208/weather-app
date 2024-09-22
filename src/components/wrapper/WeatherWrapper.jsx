import { useEffect, useState } from "react";
import CustomCityDropdown from "../utils/SearchBar";
import { WeatherCard } from "../view/WeatherCard";
import { WeatherForecastView } from "../view/WeatherForecastView";
import { convertTemperatureUnits, getDailyForecastReport, getWeatherReportFromApi } from "../utils/weatherReportActions";
import { useDispatch, useSelector } from "react-redux";
import { setTemperatureUnit, setWeatherReportData, weatherSelector } from "../../store/weatherReducer";
import { useStyle } from "../../styles/weatherStyle";
import { ToggleBar } from "../utils/ToggleBar";
import backgroundImage from '../utils/Images/clouds.jpg'
import { CACHE_KEY_CITY, CACHE_KEY_WEATHER } from "../utils/constants/utilityConstants";

export const WeatherWrapper = () => {
    const [city, setCity] = useState("Noida");
    const { weatherReportData, dailyForecastReport, temperatureUnit } = useSelector(weatherSelector);
    const dispatch = useDispatch();
    const classes = useStyle(); // Apply the styles
    const toggleTemperatureUnit = () => {
      const newUnit = temperatureUnit === "C" ? "F" : "C"; // Toggle between 'C' and 'F'
      dispatch(setTemperatureUnit(newUnit));
    };
  
    useEffect(() => {
        // Check if cached data exists in localStorage
        const cachedCity = localStorage.getItem(CACHE_KEY_CITY);
        const cachedWeatherData = localStorage.getItem(CACHE_KEY_WEATHER);
    
        if (cachedCity && cachedWeatherData) {
          // If cached data exists, set the city and weather data from localStorage
          setCity(cachedCity);
          dispatch(setWeatherReportData(JSON.parse(cachedWeatherData)));
          dispatch(getDailyForecastReport(cachedCity))
        } else {
          // Otherwise, fetch fresh weather data from API
          const fetchWeatherData = async () => {
            const weatherResponse = await getWeatherReportFromApi(city);
            dispatch(setWeatherReportData(weatherResponse));
            dispatch(getDailyForecastReport(city));
  
            // Cache the city and weather data
            localStorage.setItem(CACHE_KEY_CITY, city);
            localStorage.setItem(CACHE_KEY_WEATHER, JSON.stringify(weatherResponse));
          };
          fetchWeatherData();
        }
      }, [city, dispatch]);
  
    return (
      <div className={classes.wrapper} style={{backgroundImage: `url(${backgroundImage})`}}>
         <div className={classes.header}>
          <CustomCityDropdown onSearch={setCity} />
          <ToggleBar className = {classes.toggleBar} unit={temperatureUnit} onToggle={toggleTemperatureUnit} />
        </div>
        <WeatherCard
          city={weatherReportData?.name}
          temp={convertTemperatureUnits(weatherReportData?.main?.temp, temperatureUnit)}
          condition={weatherReportData?.weather}
        />
        <div className={classes.forecastWrapper}>
          {dailyForecastReport &&
            dailyForecastReport?.slice(1, 6).map((item, index) => (
              <WeatherForecastView
                key={index}
                date={item?.date}
                maxTemp={item?.maxTemp}
                minTemp={item?.minTemp}
                icon={item?.icon}
                condition={item?.weather}
              />
            ))}
        </div>
      </div>
    );
  };
  
