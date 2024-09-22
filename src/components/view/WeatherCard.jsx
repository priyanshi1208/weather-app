import { Card, Typography } from "@mui/material";
import { useStyle } from "../../styles/weatherStyle";
import { useSelector } from "react-redux";
import { weatherSelector } from "../../store/weatherReducer";

export const WeatherCard = ({ city, temp, condition }) => {
    const {temperatureUnit} = useSelector(weatherSelector)
    const classes = useStyle();
    
    return (
        <Card className={classes.weatherCard}>
            <Typography className={classes.city}>{city}</Typography>
            <img
                src={`https://openweathermap.org/img/wn/${condition?.[0]?.icon}.png`}
                alt="Weather icon"
                className={classes.weatherIcon}
            />
            <Typography className={classes.temp}>{temp}°{temperatureUnit}</Typography>
            <Typography className={classes.conditionText}>
                {condition?.[0]?.main}
            </Typography>
        </Card>
    );
};
