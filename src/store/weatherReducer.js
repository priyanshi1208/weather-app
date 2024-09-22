import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    searchCity : 'noida',
    weatherReportData : {},
    dailyForecastReport : [],
    temperatureUnit : 'C'
}
export const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        setSearchedCity : (state , action) => {
            state.searchCity = action.payload
        },
        setWeatherReportData : (state , action) => {
            state.weatherReportData = action.payload
        },
        setDailyForecastReport : (state , action) => {
            state.dailyForecastReport = action.payload
        },
        setTemperatureUnit : (state , action) => {
            state.temperatureUnit = action.payload
        }
    }
})
export const {setSearchedCity , setWeatherReportData,setDailyForecastReport,setTemperatureUnit} = weatherSlice.actions
export const weatherSelector = (state) => state.weather
export default weatherSlice.reducer 