import React from 'react';

const Weather = (props) => {
    if (props.weatherapi.length !== 0) {
        return(
            <>
            Temperature: {props.weatherapi.current.temperature} Celcius
            <br></br>
            <img src={props.weatherapi.current.weather_icons} alt=''/>
            <br></br>
            Wind: {props.weatherapi.current.wind_speed} Knots
            </>
        )
    }
    else {
        return(
            <>
            </>
        )
    }
}








export default Weather;