import axios from "axios";
import { setDailyForecastReport } from "../../store/weatherReducer";

const API_KEY = 'a6a3405eee906b3118de8c314c50f4c3';
export const getWeatherReportFromApi = async (city) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: false, // Ensure credentials are not included in the request
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error fetching weather report:', error);
    throw error; // Rethrow the error so it can be handled upstream
  }
};

export const getDailyForecastReport = (city) => async (dispatch) => {
  try {
      const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`,
          {
              headers: {
                  'Content-Type': 'application/json',
              },
              withCredentials: false, // Ensure credentials are not included in the request
          }
      );
      const processedData = processForecastData(response.data);
      dispatch(setDailyForecastReport(processedData));
      console.log("process",processedData);
      return response.data;
  } catch (error) {
      console.error('Error fetching weather data:', error);
      throw error; // Rethrow error so it can be handled further up the chain if needed
  }
};
  
export  const convertTemperatureUnits = (temperature, unit) => {
    return unit === "C" ? temperature : (temperature * 9/5) + 32;
};

export const processForecastData = (forecastData) => {
  const dailyForecastMap = new Map();

  forecastData.list.forEach((item) => {
    const date = item.dt_txt.split(" ")[0]; // Extract the date portion
    
    if (!dailyForecastMap.has(date)) {
      // Initialize the entry if it doesn't exist
      dailyForecastMap.set(date, { 
        date: date, 
        minTemp: item.main.temp, 
        maxTemp: item.main.temp, 
        weather: item.weather[0].main, 
        icon: item?.weather[0]?.icon 
      });
    }

    // Update min and max temperatures
    const forecast = dailyForecastMap.get(date);
    forecast.minTemp = Math.min(forecast.minTemp, item.main.temp);
    forecast.maxTemp = Math.max(forecast.maxTemp, item.main.temp);

    dailyForecastMap.set(date, forecast);
  });

  // Convert the Map values into an array
  const dailyForecastArray = Array.from(dailyForecastMap.values());

  return dailyForecastArray; // Returns an array with forecast data for each date
};

