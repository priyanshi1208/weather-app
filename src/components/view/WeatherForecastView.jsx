import { Card, Typography } from "@mui/material";
import { forecastStyles } from "../../styles/weatherStyle";
import { convertTemperatureUnits } from "../utils/weatherReportActions";
import { useSelector } from "react-redux";
import { weatherSelector } from "../../store/weatherReducer";

export const WeatherForecastView = ({ date, maxTemp, minTemp, icon, condition }) => {
    const classes = forecastStyles();
    const {temperatureUnit} = useSelector(weatherSelector)
    return (
        <Card className={classes.forecastCard}>
            <Typography className={classes.date}>{date}</Typography>
            <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt="Weather icon" className={classes.weatherIcon} />
            <Typography className={classes.conditionText}>
                {condition}
            </Typography>
            <Typography className={classes.temp}>
                {`High: ${convertTemperatureUnits( maxTemp,temperatureUnit)}°${temperatureUnit}
                   Low: ${convertTemperatureUnits( minTemp, temperatureUnit)}°${temperatureUnit}`}
            </Typography>
        </Card>
    );
};
