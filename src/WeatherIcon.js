import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function weatherIcon(props){
const codeMapping = {
    "01d": "CLEAR_DAY",
    "02d": "PARTLY_CLOUDY_DAY",
    "03d": "CLOUDY",
    "04d": "PARTLY_CLOUDY_DAY",
    "09d": "RAIN",
    "10d": "RAIN",
    "11d": "RAIN",
    "13d": "SNOW",
    "50d": "FOG",
    "01n": "CLEAR_NIGHT",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03n": "CLOUDY",
    "04n": "PARTLY_CLOUDY_NIGHT",
    "09n": "RAIN",
    "10n": "RAIN",
    "11n": "RAIN",
    "13n": "SNOW",
    "50n": "FOG",
};     
return(
    <ReactAnimatedWeather
    icon={codeMapping[props.code]}
    color="black"
    size= {props.size}
    animate={true}
  />
);
}